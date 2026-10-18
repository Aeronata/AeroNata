/* AeroNata — lightweight intro */
(() => {
  const intro = document.getElementById('an-intro');
  if (!intro) return;
  document.documentElement.style.overflow = 'hidden';
  let closing = false;
  const finish = () => { intro.classList.add('an-intro-out'); document.documentElement.style.overflow = ''; window.setTimeout(() => intro.remove(), 420); };
  const closeIntro = () => { if (closing) return; closing = true; intro.classList.add('an-intro-collapse'); window.setTimeout(finish, 360); };
  window.setTimeout(closeIntro, 4000);
  intro.addEventListener('click', closeIntro, { once: true });
  window.addEventListener('keydown', e => { if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') closeIntro(); }, { once: true });
})();

/* AeroNata 1.0 — Technozen extension. */
(() => {
  const technozen = {
    id:'technozen', name:'Technozen',
    cover:'assets/technozen/technozen-capa-categoria.png', banner:'assets/technozen/technozen-banner.png',
    gallery:['assets/technozen/technozen-exemplo1.jpg','assets/technozen/technozen-exemplo2.jpg','assets/technozen/technozen-exemplo3.jpg','assets/technozen/technozen-exemplo4.jpg'], theme:'assets/technozen/technozen-tema.mp3',
    category:'Digital', tags:['Digital','Natureza','Nostalgia'], period:'2000s', colors:['#b9ff27','#45c95a'], bg:'linear-gradient(145deg,#d9ff61 0%,#83e735 42%,#18a85b 100%)',
    summary:'Tecnologia, natureza e tranquilidade em uma visão otimista e tátil do futuro digital dos anos 2000.',
    origin:'Technozen reúne uma linguagem visual dos anos 2000 em que eletrônicos, interfaces amigáveis e design tecnológico aparecem integrados à natureza e ao bem-estar. O nome combina tecnologia com a ideia de calma e equilíbrio do “zen”.',
    features:['Verde-limão, branco, azul e transparências','Botões glossy, vidro, gel, gotas e formas arredondadas','Celulares, players, computadores e interfaces como parte da natureza','Folhas, água, reflexos, brilho suave e sensação de calma'],
    culture:'A linguagem aparece ligada ao design tecnológico e comercial dos anos 2000, especialmente em eletrônicos, publicidade, interfaces e imagens que apresentavam a tecnologia pessoal como simples, limpa e acolhedora.',
    evolution:'Com a ascensão do flat design e de interfaces mais minimalistas, esse tipo de acabamento perdeu espaço. Hoje ele reaparece como nostalgia de uma época em que o futuro digital era imaginado de forma mais física, colorida e otimista.',
    curiosity:'Frutiger Eco imagina um futuro melhor para o planeta. Technozen imagina uma relação melhor entre pessoas, tecnologia e natureza.'
  };
  if (typeof aesthetics !== 'undefined' && !aesthetics.some(a => a.id === 'technozen')) { aesthetics.splice(Math.min(7, aesthetics.length), 0, technozen); if (typeof renderCards === 'function') renderCards(); }
  if (typeof themeTracks !== 'undefined' && !themeTracks.technozen) themeTracks.technozen={name:'Technozen',src:'assets/technozen/technozen-tema.mp3'};
  const select = document.getElementById('modeSelect'); const grid = document.querySelector('.mode-grid');
  if (select && !select.querySelector('option[value="technozen"]')) { const option=document.createElement('option'); option.value='technozen'; option.textContent='Technozen'; select.insertBefore(option,select.querySelector('option[value="classic"]')); }
  if (grid && !grid.querySelector('[data-mode-choice="technozen"]')) { const button=document.createElement('button'); button.type='button'; button.dataset.modeChoice='technozen'; button.className='is-new technozen-choice'; button.innerHTML='<i></i><span>Technozen <em>NEW</em></span>'; grid.insertBefore(button,grid.querySelector('[data-mode-choice="classic"]')); }
  const count=document.getElementById('countNumber'); if(count) count.textContent=String(typeof aesthetics!=='undefined'?aesthetics.length:22);
  document.querySelectorAll('.section-index').forEach(el=>{if(el.textContent.includes('ARCHIVE'))el.textContent='AERONATA ARCHIVE — 001/022'});
  const results=document.getElementById('resultsLabel'); if(results&&/de \d+ estéticas/.test(results.textContent))results.textContent=results.textContent.replace(/de \d+ estéticas/,'de 22 estéticas');
  document.addEventListener('change',e=>{if(e.target===select)document.body.classList.toggle('technozen-active',select.value==='technozen')});
  grid?.addEventListener('click',e=>{if(e.target.closest('[data-mode-choice="technozen"]'))requestAnimationFrame(()=>document.body.classList.add('technozen-active'))});
  document.addEventListener('click',e=>{const card=e.target.closest('[data-id]');if(!card)return;const dialog=document.getElementById('detailDialog');if(card.dataset.id==='technozen')requestAnimationFrame(()=>dialog?.classList.add('technozen-detail'));else dialog?.classList.remove('technozen-detail')},true);
})();

/* AeroNata guide loader — versioned so mobile browsers never keep stale guide CSS/JS. */
(()=>{const v='20261018-1927';const css=document.createElement('link');css.rel='stylesheet';css.href='avatar.css?v='+v;document.head.appendChild(css);const start=()=>{const js=document.createElement('script');js.src='avatar.js?v='+v;document.body.appendChild(js)};if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start()})();

/* Expanded quiz bank loader — keeps the main script lean while extending 45 → 70 questions. */
(()=>{const js=document.createElement('script');js.src='quiz-extra.js';document.body.appendChild(js)})();

/* Paris 2010s + priority 2016 interface */
(()=>{const css=document.createElement('link');css.rel='stylesheet';css.href='era-2010s.css';document.head.appendChild(css);const js=document.createElement('script');js.src='era-2010s.js';document.body.appendChild(js)})();
