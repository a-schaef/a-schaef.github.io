(function () {
  const STORAGE_KEY = 'color-scheme';
  const DEFAULT = 'orange';
  const schemes = ['contrast', 'orange', 'navy', 'dark'];

  function applyScheme(scheme) {
    document.body.classList.remove(...schemes.map(s => 'scheme-' + s));
    document.body.classList.add('scheme-' + scheme);
    document.querySelectorAll('.swatch').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.scheme === scheme);
    });
    localStorage.setItem(STORAGE_KEY, scheme);
  }

  function init() {
    const saved = localStorage.getItem(STORAGE_KEY) || DEFAULT;
    applyScheme(saved);
    document.querySelectorAll('.swatch').forEach(btn => {
      btn.addEventListener('click', () => applyScheme(btn.dataset.scheme));
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();