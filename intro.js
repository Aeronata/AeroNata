/* AeroNata — cinematic intro V2: real image orbit cards */
(() => {
  const intro = document.getElementById('an-intro');
  if (!intro) return;

  const cards = [
    ['assets/frutiger-aero/category.jpg', 'Frutiger Aero'],
    ['assets/vaporwave/category.jpg', 'Y2K'],
    ['assets/vaporwave/category.jpg', 'Vaporwave'],
    ['assets/evil-aero/category.jpg', 'Evil Aero'],
    ['assets/2000s-tech/category.jpg', '2000s Tech'],
    ['assets/dorfic/category.jpg', 'Dorfic'],
    ['assets/brazil-2000s/category.jpg', 'Brazil 2000s'],
    ['assets/frutiger-zen/category.jpg', 'Frutiger Zen']
  ];

  intro.querySelectorAll('.an-intro-chip').forEach((chip, i) => {
    const data = cards[i];
    if (!data) return;
    chip.textContent = '';
    const img = document.createElement('img');
    img.className = 'an-intro-thumb';
    img.src = data[0];
    img.alt = '';
    img.decoding = 'async';
    const label = document.createElement('span');
    label.className = 'an-intro-label';
    label.textContent = data[1];
    chip.append(img, label);
  });

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
  window.setTimeout(closeIntro, 5000);
  intro.addEventListener('click', closeIntro);
  window.addEventListener('keydown', e => {
    if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') closeIntro();
  }, {once:true});
})();
