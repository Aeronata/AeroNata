/* AeroNata — intro orbital experimental */
(() => {
  const intro = document.getElementById('an-intro');
  if (!intro) return;
  document.documentElement.style.overflow = 'hidden';
  const closeIntro = () => {
    if (intro.classList.contains('an-intro-out')) return;
    intro.classList.add('an-intro-out');
    document.documentElement.style.overflow = '';
    window.setTimeout(() => intro.remove(), 900);
  };
  window.setTimeout(closeIntro, 3600);
  intro.addEventListener('click', closeIntro);
  window.addEventListener('keydown', e => { if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') closeIntro(); }, {once:true});
})();
