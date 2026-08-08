(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const serviceItems = [...document.querySelectorAll('.service-list article')];
  const processSection = document.querySelector('.process');
  const targets = processSection ? [...serviceItems, processSection] : serviceItems;

  if (reduceMotion || targets.length === 0 || !('IntersectionObserver' in window)) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.remove('motion-pending');
      entry.target.classList.add('is-revealed');
      observer.unobserve(entry.target);
    });
  }, {
    rootMargin: '0px 0px -12% 0px',
    threshold: 0.1,
  });

  targets.forEach((target) => target.classList.add('motion-pending'));
  requestAnimationFrame(() => targets.forEach((target) => observer.observe(target)));
})();
