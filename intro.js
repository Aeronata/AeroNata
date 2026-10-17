/* AeroNata — cinematic intro v2 */
(() => {
  const intro = document.getElementById('an-intro');
  if (!intro) return;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.style.overflow = 'hidden';
  let closing = false;
  const finish = () => {
    intro.classList.add('an-intro-out');
    document.documentElement.style.overflow = '';
    window.setTimeout(() => intro.remove(), 700);
  };
  const closeIntro = () => {
    if (closing) return;
    closing = true;
    if (reduceMotion) return finish();
    intro.classList.add('an-intro-collapse');
    window.setTimeout(finish, 720);
  };
  window.setTimeout(closeIntro, reduceMotion ? 700 : 5000);
  intro.addEventListener('click', closeIntro);
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') closeIntro();
  }, { once: true });
})();
