/* AeroNata — lightweight intro */
(() => {
  const intro = document.getElementById('an-intro');
  if (!intro) return;

  document.documentElement.style.overflow = 'hidden';
  let closing = false;

  const finish = () => {
    intro.classList.add('an-intro-out');
    document.documentElement.style.overflow = '';
    window.setTimeout(() => intro.remove(), 420);
  };

  const closeIntro = () => {
    if (closing) return;
    closing = true;
    intro.classList.add('an-intro-collapse');
    window.setTimeout(finish, 360);
  };

  window.setTimeout(closeIntro, 4000);
  intro.addEventListener('click', closeIntro, { once: true });
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') closeIntro();
  }, { once: true });
})();
