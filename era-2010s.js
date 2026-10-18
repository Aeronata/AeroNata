/* AeroNata — Paris 2010s + 2016 themes.
   Paris 2010s and 2016 are full visual themes.
   2016 2 is only the moon-toggle variant of 2016. */
(() => {
  const paris = {
    id:'paris-2010s', name:'Paris 2010s',
    cover:'assets/Paris/Paris-capa-catalogo.jpg', banner:'assets/Paris/Paris-banner.png', capa:'assets/Paris/Paris-capa1.jpg',
    gallery:['assets/Paris/Paris-exemplo1.jpg','assets/Paris/Paris-exemplo2.jpg','assets/Paris/Paris-exemplo3.jpg','assets/Paris/paris-exemplo4.jpg'], theme:'assets/Paris/Paris-tema.mp3',
    category:'Nostalgia', tags:['Nostalgia','Digital'], period:'2010s', colors:['#f39ac5','#b58ad9'], bg:'linear-gradient(145deg,#f7c7d9,#c59bd9 48%,#8b668f)',
    summary:'A Paris romantizada pela internet dos anos 2010: rosa, filtros vintage, Torre Eiffel e sonhos vistos através de uma tela.',
    origin:'Paris 2010s reúne a imagem romantizada da cidade que circulou intensamente em wallpapers, blogs, Tumblr, Pinterest, We Heart It e no Instagram dos primeiros anos.',
    features:['Torre Eiffel como símbolo recorrente','Rosa, lilás, luz estourada e filtros vintage','Granulado, baixa resolução e fotografia de celular','Flores, macarons, balões e uma atmosfera romântica'],
    culture:'Mais do que registrar a cidade real, essas imagens transformaram Paris em um lugar imaginado pela cultura visual da internet: delicado, distante, romântico e aspiracional.',
    evolution:'Com a mudança dos filtros, câmeras e redes sociais, esse tratamento visual perdeu espaço e passou a carregar uma nostalgia muito específica do começo e do meio dos anos 2010.',
    curiosity:'Para muita gente, essa Paris nunca foi um lugar visitado — foi um lugar vivido através da internet.'
  };

  const y2016 = {
    id:'2016', name:'2016',
    cover:'assets/2016/2016-capa-categoria.jpg', banner:'assets/2016/2016-banner.jpg', capa:'assets/2016/2016-capa1.jpg',
    gallery:['assets/2016/2016-exemplo1.jpg','assets/2016/2016-exemplo2.jpg','assets/2016/2016-exemplo3.jpg','assets/2016/2016-exemplo4.jpg','assets/2016/2016-exemplo5.jpg'], theme:'assets/2016/2016-tema.mp3',
    category:'Nostalgia', tags:['Nostalgia','Digital'], period:'2016', colors:['#ff76bb','#8064d9'], bg:'linear-gradient(145deg,#ff9cc8,#8b72d9 52%,#4e3a86)',
    summary:'O imaginário colorido de 2016: palmeiras, filtros rosados, iPhone, cafés, emojis, verão e uma internet mais pessoal.',
    origin:'No AeroNata, 2016 preserva a linguagem visual que marcou redes sociais, wallpapers e fotografias compartilhadas em meados dos anos 2010.',
    features:['Filtros rosa, roxo, azul e luz solar estourada','Palmeiras, verão, cafés, parques e fotografias casuais','iPhone, fones, câmeras compactas, emojis e objetos da época','Imagem comprimida, granulado e tratamento típico das redes sociais'],
    culture:'É uma memória da internet cotidiana de meados dos anos 2010: fotos de celular, perfis pessoais, feeds coloridos, música, viagens idealizadas e pequenos objetos que definiam a época.',
    evolution:'O visual foi sendo substituído por câmeras mais limpas, feeds mais padronizados e interfaces cada vez mais minimalistas. Hoje, suas imperfeições ajudam a dar a sensação de uma internet antiga e mais pessoal.',
    curiosity:'No AeroNata, 2016 recebe tratamento especial: sua interface mistura a nostalgia visual da época com elementos da web social antiga, inspirados em páginas e comunidades como o Orkut.'
  };

  if (typeof aesthetics !== 'undefined') {
    const old2016=aesthetics.findIndex(a=>a.id==='2016'); if(old2016>=0) aesthetics.splice(old2016,1);
    const oldParis=aesthetics.findIndex(a=>a.id==='paris-2010s'); if(oldParis>=0) aesthetics.splice(oldParis,1);
    aesthetics.unshift(y2016);
    aesthetics.splice(1,0,paris);
    if (typeof renderCards === 'function') renderCards();
  }

  if (typeof themeTracks !== 'undefined') {
    themeTracks['2016']={name:'2016',src:'assets/2016/2016-tema.mp3'};
    themeTracks['2016-2']={name:'2016 2',src:'assets/2016 2/2016-2-tema.mp3'};
    themeTracks['paris-2010s']={name:'Paris 2010s',src:'assets/Paris/Paris-tema.mp3'};
  }

  const select=document.getElementById('modeSelect');
  const grid=document.querySelector('.mode-grid');
  const addTheme=(id,label,cls,before=true)=>{
    if(select && !select.querySelector(`option[value="${id}"]`)){
      const o=document.createElement('option'); o.value=id; o.textContent=label;
      before?select.insertBefore(o,select.firstElementChild):select.appendChild(o);
    }
    if(grid && !grid.querySelector(`[data-mode-choice="${id}"]`)){
      const b=document.createElement('button'); b.type='button'; b.dataset.modeChoice=id; b.className=`is-new ${cls}`;
      b.innerHTML=`<i></i><span>${label} <em>NEW</em></span>`;
      before?grid.insertBefore(b,grid.firstElementChild):grid.appendChild(b);
    }
  };
  /* Paris is a real selectable theme. 2016 stays first/high-priority. */
  addTheme('paris-2010s','Paris 2010s','mode-paris-choice',true);
  addTheme('2016','2016','mode-2016-choice',true);

  const syncCounts=()=>{
    const total=typeof aesthetics!=='undefined'?aesthetics.length:24;
    const count=document.getElementById('countNumber'); if(count) count.textContent=String(total);
    document.querySelectorAll('.section-index').forEach(el=>{if(el.textContent.includes('ARCHIVE'))el.textContent=`AERONATA ARCHIVE — 001/${String(total).padStart(3,'0')}`});
    const results=document.getElementById('resultsLabel'); if(results&&/de \d+ estéticas/.test(results.textContent))results.textContent=results.textContent.replace(/de \d+ estéticas/,`de ${total} estéticas`);
  };
  syncCounts();

  let alt2016=false;
  const body=document.body;
  const toggle=document.getElementById('themeToggle');
  const setVariant=(alt,play=true)=>{
    alt2016=alt;
    body.classList.toggle('mode-2016-alt',alt);
    body.classList.remove('light-override');
    if(toggle && body.dataset.mode==='2016'){
      toggle.textContent=alt?'☀️':'🌙';
      toggle.title=alt?'Voltar para 2016':'Entrar em 2016 2';
      toggle.setAttribute('aria-label',toggle.title);
    }
    const a=typeof aesthetics!=='undefined'?aesthetics.find(x=>x.id==='2016'):null;
    if(a) a.banner=alt?'assets/2016 2/2016-2-banner.jpg':'assets/2016/2016-banner.jpg';
    if(play && body.dataset.mode==='2016' && typeof loadAndMaybePlay==='function') loadAndMaybePlay(alt?'2016-2':'2016');
  };
  const syncMode=()=>{
    const active2016=body.dataset.mode==='2016';
    body.classList.toggle('mode-2016-active',active2016);
    body.classList.toggle('mode-paris-active',body.dataset.mode==='paris-2010s');
    if(active2016){ body.classList.remove('light-override'); setVariant(alt2016,false); }
    else body.classList.remove('mode-2016-alt');
  };
  new MutationObserver(syncMode).observe(body,{attributes:true,attributeFilter:['data-mode']});
  syncMode();

  /* Run after the base theme toggle. In 2016 it becomes the dedicated 2016 ↔ 2016 2 switch. */
  toggle?.addEventListener('click',()=>{
    if(body.dataset.mode!=='2016') return;
    requestAnimationFrame(()=>setVariant(!alt2016,true));
  });

  document.addEventListener('click',e=>{
    const card=e.target.closest('[data-id]'); if(!card) return;
    const dialog=document.getElementById('detailDialog');
    dialog?.classList.toggle('detail-2016',card.dataset.id==='2016');
    dialog?.classList.toggle('detail-paris',card.dataset.id==='paris-2010s');
  },true);
})();