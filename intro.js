/* AeroNata — intro V2 safe */
(() => {
  const intro = document.getElementById('an-intro');
  if (!intro) return;
  document.documentElement.style.overflow = 'hidden';
  let closing = false;
  const finish = () => {
    intro.classList.add('an-intro-out');
    document.documentElement.style.overflow = '';
    window.setTimeout(() => intro.remove(), 750);
  };
  const closeIntro = () => {
    if (closing) return;
    closing = true;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return finish();
    intro.classList.add('an-intro-collapse');
    window.setTimeout(finish, 620);
  };
  window.setTimeout(closeIntro, 4400);
  intro.addEventListener('click', closeIntro);
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') closeIntro();
  }, {once:true});
})();
