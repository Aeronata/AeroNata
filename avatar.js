/* AeroNata Avatar Guide — local, lightweight, no chatbot dependency */
(() => {
  const KEY='aeronata.avatar.skin';
  const SEEN='aeronata.avatar.welcome';
  const SKINS=Array.from({length:10},(_,i)=>({id:`skin-${i+1}`,src:`assets/avatar/avatar-${i+1}.png`,label:`Avatar ${i+1}`}));
  const $=(s,r=document)=>r.querySelector(s);
  const current=()=>localStorage.getItem(KEY);
  const skin=()=>SKINS.find(x=>x.id===current())||SKINS[0];
  const image=(className='')=>`<img class="${className}" src="${skin().src}" alt="Seu guia AeroNata" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><span class="an-avatar-fallback" hidden>✦</span>`;
  const setup=document.createElement('div');
  setup.className='an-avatar-setup'; setup.hidden=!!current();
  setup.innerHTML=`<div class="an-avatar-card"><p class="eyebrow">✦ GUIA AERONATA</p><h2>Escolha seu companheiro.</h2><p>Ele pode te acompanhar pelo arquivo, mostrar onde as coisas ficam e avisar quando uma interface tem algo especial.</p><div class="an-avatar-grid">${SKINS.map(s=>`<button class="an-avatar-skin" type="button" data-skin="${s.id}" aria-label="${s.label}"><img src="${s.src}" alt="${s.label}"></button>`).join('')}</div><button class="an-avatar-confirm" type="button" disabled>Esse será meu guia ✦</button><small>Você poderá trocar depois.</small></div>`;
  document.body.appendChild(setup);
  let picked=null;
  setup.addEventListener('click',e=>{const b=e.target.closest('[data-skin]');if(!b)return;picked=b.dataset.skin;setup.querySelectorAll('.an-avatar-skin').forEach(x=>x.classList.toggle('selected',x===b));$('.an-avatar-confirm',setup).disabled=false});
  $('.an-avatar-confirm',setup)?.addEventListener('click',()=>{if(!picked)return;localStorage.setItem(KEY,picked);localStorage.setItem(SEEN,'1');setup.hidden=true;mountGuide(true)});

  function contextualMessage(){
    const hash=location.hash;
    if(hash==='#quiz')return 'Tá no Quiz ✦ Responde pelo que você sente primeiro — não existe resposta certa.';
    if(hash==='#catalogo')return 'Aqui fica o arquivo principal. Você pode buscar uma estética pelo nome ou filtrar por sensação.';
    if(hash==='#experiencias')return 'Esses são os portais especiais: experiências maiores do que uma ficha de catálogo.';
    const mode=$('#modeSelect')?.value;
    if(['aero','frutiger-metro','brazil-2000s'].includes(mode))return 'Essa interface tem uma variação especial. Dá uma olhada no botão de ☀️/🌙 lá em cima.';
    if(mode==='technozen')return 'Technozen ✦ Tecnologia calma, natureza e aquele futuro dos anos 2000 que parecia confortável.';
    return 'Quer explorar? O Catálogo guarda as estéticas, o Quiz encontra uma parecida com você e os Portais vão mais fundo.';
  }
  function mountGuide(greet=false){
    document.querySelector('.an-avatar-launcher')?.remove();document.querySelector('.an-avatar-bubble')?.remove();
    if(!current())return;
    const launcher=document.createElement('button');launcher.type='button';launcher.className='an-avatar-launcher';launcher.setAttribute('aria-label','Abrir guia AeroNata');launcher.innerHTML=image()+'<span class="an-avatar-dot"></span>';
    const bubble=document.createElement('div');bubble.className='an-avatar-bubble';bubble.hidden=true;bubble.innerHTML=`<p></p><div class="an-avatar-actions"><button type="button" data-go="catalogo">Catálogo</button><button type="button" data-go="quiz">Quiz</button><button type="button" data-avatar-settings>Trocar avatar</button></div>`;
    document.body.append(launcher,bubble);
    const say=(text)=>{bubble.querySelector('p').textContent=text;bubble.hidden=false};
    launcher.addEventListener('click',()=>{if(!bubble.hidden){bubble.hidden=true;return}say(contextualMessage())});
    bubble.addEventListener('click',e=>{const go=e.target.closest('[data-go]');if(go){location.hash=go.dataset.go;bubble.hidden=true;return}if(e.target.closest('[data-avatar-settings]'))openSettings()});
    if(greet){say('Pronto ✦ Vou ficar por aqui. Se você se perder no AeroNata, é só tocar em mim.');setTimeout(()=>{bubble.hidden=true},5000)}
  }
  function openSettings(){
    document.querySelector('.an-avatar-settings')?.remove();
    const modal=document.createElement('div');modal.className='an-avatar-settings';modal.innerHTML=`<div class="an-avatar-card"><button class="an-avatar-close" type="button" aria-label="Fechar">×</button><p class="eyebrow">MEU AERO</p><h2>Seu guia.</h2><p>Troque a aparência quando quiser.</p><div class="an-avatar-grid">${SKINS.map(s=>`<button class="an-avatar-skin ${s.id===current()?'selected':''}" type="button" data-change="${s.id}" aria-label="${s.label}"><img src="${s.src}" alt="${s.label}"></button>`).join('')}</div></div>`;document.body.appendChild(modal);
    modal.addEventListener('click',e=>{if(e.target===modal||e.target.closest('.an-avatar-close')){modal.remove();return}const b=e.target.closest('[data-change]');if(!b)return;localStorage.setItem(KEY,b.dataset.change);modal.querySelectorAll('.an-avatar-skin').forEach(x=>x.classList.toggle('selected',x===b));mountGuide(false)});
  }
  if(current())mountGuide(false);
  window.addEventListener('hashchange',()=>{document.querySelector('.an-avatar-bubble')?.setAttribute('hidden','')});
})();
