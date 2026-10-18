/* AeroNata — Paris 2010s + 2016 full themes.
   Paris and 2016 are first-class selectable interfaces.
   2016 2 exists only as the moon variant of 2016. */
(() => {
  const paris = {
    id:'paris-2010s', name:'Paris 2010s', new:true,
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
    id:'2016', name:'2016', new:true,
    cover:'assets/2016/2016-capa-categoria.jpg', banner:'assets/2016/2016-banner.jpg', capa:'assets/2016/2016-capa1.jpg',
    gallery:['assets/2016/2016-exemplo1.jpg','assets/2016/2016-exemplo2.jpg','assets/2016/2016-exemplo3.jpg','assets/2016/2016-exemplo4.jpg','assets/2016/2016-exemplo5.jpg'], theme:'assets/2016/2016-tema.mp3',
    category:'Nostalgia', tags:['Nostalgia','Digital'], period:'2016', colors:['#ff76bb','#8064d9'], bg:'linear-gradient(145deg,#ff9cc8,#8b72d9 52%,#4e3a86)',
    summary:'O imaginário colorido de 2016: palmeiras, filtros rosados, iPhone, cafés, emojis, verão e uma internet mais pessoal.',
    origin:'No AeroNata, 2016 preserva a linguagem visual que marcou redes sociais, wallpapers e fotografias compartilhadas em meados dos anos 2010.',
    features:['Filtros rosa, roxo, azul e luz solar estourada','Palmeiras, verão, cafés, parques e fotografias casuais','iPhone, fones, câmeras compactas, emojis e objetos da época','Imagem comprimida, granulado e tratamento típico das redes sociais'],
    culture:'É uma memória da internet cotidiana de meados dos anos 2010: fotos de celular, perfis pessoais, feeds coloridos, música, viagens idealizadas e pequenos objetos que definiam a época.',
    evolution:'O visual foi sendo substituído por câmeras mais limpas, feeds mais padronizados e interfaces cada vez mais minimalistas. Hoje, suas imperfeições ajudam a dar a sensação de uma internet antiga e mais pessoal.',
    curiosity:'No AeroNata, 2016 recebe tratamento especial: sua interface mistura a nostalgia visual da época com a web social antiga, inspirada em páginas de perfil, recados e comunidades.'
  };

  const body=document.body;
  const select=document.getElementById('modeSelect');
  const grid=document.querySelector('.mode-grid');
  const toggle=document.getElementById('themeToggle');
  let alt2016=false;

  /* Catalog entries: both are real aesthetics; 2016 gets first position. */
  if (typeof aesthetics !== 'undefined') {
    for (const id of ['2016','paris-2010s']) { const i=aesthetics.findIndex(a=>a.id===id); if(i>=0)aesthetics.splice(i,1); }
    aesthetics.unshift(y2016,paris);
    if(typeof renderCards==='function')renderCards();
  }

  /* Audio registry used by the base player. */
  if (typeof themeTracks !== 'undefined') {
    themeTracks['2016']={name:'2016',src:'assets/2016/2016-tema.mp3'};
    themeTracks['2016-2']={name:'2016 2',src:'assets/2016 2/2016-2-tema.mp3'};
    themeTracks['paris-2010s']={name:'Paris 2010s',src:'assets/Paris/Paris-tema.mp3'};
  }

  /* Reconcile picker explicitly instead of relying on one insertion pass. */
  function ensureTheme(id,label,cls,position){
    if(select && !select.querySelector(`option[value="${id}"]`)){
      const o=document.createElement('option');o.value=id;o.textContent=label;
      select.insertBefore(o,select.children[position]||null);
    }
    if(grid && !grid.querySelector(`[data-mode-choice="${id}"]`)){
      const b=document.createElement('button');b.type='button';b.dataset.modeChoice=id;b.className=`is-new ${cls}`;
      b.innerHTML=`<i></i><span>${label} <em>NEW</em></span>`;
      grid.insertBefore(b,grid.children[position]||null);
    }
  }
  function ensurePicker(){
    ensureTheme('2016','2016','mode-2016-choice',0);
    ensureTheme('paris-2010s','Paris 2010s','mode-paris-choice',1);
  }
  ensurePicker();
  requestAnimationFrame(ensurePicker);
  setTimeout(ensurePicker,250);

  function syncCounts(){
    const total=typeof aesthetics!=='undefined'?aesthetics.length:0;
    const count=document.getElementById('countNumber');if(count)count.textContent=String(total);
    document.querySelectorAll('.section-index').forEach(el=>{if(el.textContent.includes('ARCHIVE'))el.textContent=`AERONATA ARCHIVE — 001/${String(total).padStart(3,'0')}`});
    const results=document.getElementById('resultsLabel');if(results&&/de \d+ estéticas/.test(results.textContent))results.textContent=results.textContent.replace(/de \d+ estéticas/,`de ${total} estéticas`);
  }
  syncCounts();

  function set2016Variant(alt,play=true){
    alt2016=Boolean(alt);
    body.classList.toggle('mode-2016-alt',alt2016);
    body.classList.remove('light-override');
    if(body.dataset.mode==='2016'&&toggle){
      toggle.textContent=alt2016?'☀':'🌙';
      toggle.title=alt2016?'Voltar para 2016':'Entrar em 2016 2';
      toggle.setAttribute('aria-label',toggle.title);
    }
    const item=typeof aesthetics!=='undefined'?aesthetics.find(a=>a.id==='2016'):null;
    if(item)item.banner=alt2016?'assets/2016 2/2016-2-banner.jpg':'assets/2016/2016-banner.jpg';
    if(play&&body.dataset.mode==='2016'&&typeof loadAndMaybePlay==='function')loadAndMaybePlay(alt2016?'2016-2':'2016',true);
  }

  function syncMode(){
    const is2016=body.dataset.mode==='2016';
    const isParis=body.dataset.mode==='paris-2010s';
    body.classList.toggle('mode-2016-active',is2016);
    body.classList.toggle('mode-paris-active',isParis);
    if(is2016){body.classList.remove('light-override');set2016Variant(alt2016,false);}
    else body.classList.remove('mode-2016-alt');
  }
  new MutationObserver(syncMode).observe(body,{attributes:true,attributeFilter:['data-mode']});
  syncMode();

  /* Intercept the global light/dark button only while 2016 is active.
     This prevents the base handler from applying light-override before switching 2016 ↔ 2016 2. */
  toggle?.addEventListener('click',event=>{
    if(body.dataset.mode!=='2016')return;
    event.preventDefault();event.stopImmediatePropagation();
    set2016Variant(!alt2016,true);
  },true);

  /* Detail styling follows the selected card. */
  document.addEventListener('click',e=>{
    const card=e.target.closest('[data-id]');if(!card)return;
    const dialog=document.getElementById('detailDialog');
    dialog?.classList.toggle('detail-2016',card.dataset.id==='2016');
    dialog?.classList.toggle('detail-paris',card.dataset.id==='paris-2010s');
  },true);
})();