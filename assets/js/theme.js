// Depth — theme, text size, layout width, colorblind mode.
// Persists to localStorage so a choice holds across page navigation.
// This file is safe to run on every page; it wires up whatever
// settings-panel controls exist in that page's HTML.
(function () {
  const html = document.documentElement;
  const KEYS = { theme: 'depth-theme', size: 'depth-size', layout: 'depth-layout', cb: 'depth-cb' };

  // Apply stored (or default) values immediately.
  html.dataset.theme = localStorage.getItem(KEYS.theme) || 'teal';
  html.dataset.size = localStorage.getItem(KEYS.size) || 'md';
  html.dataset.layout = localStorage.getItem(KEYS.layout) || 'normal';
  html.dataset.cb = localStorage.getItem(KEYS.cb) || 'off';

  document.addEventListener('DOMContentLoaded', () => {
    const gearbtn = document.getElementById('gearbtn');
    const panel = document.getElementById('settingsPanel');
    if (!gearbtn || !panel) return;

    gearbtn.addEventListener('click', () => {
      const open = panel.classList.toggle('open');
      gearbtn.setAttribute('aria-expanded', open);
    });
    document.addEventListener('click', (e) => {
      if (!panel.contains(e.target) && e.target !== gearbtn && panel.classList.contains('open')) {
        panel.classList.remove('open');
        gearbtn.setAttribute('aria-expanded', 'false');
      }
    });

    // reflect current state on the controls themselves
    const syncPressed = (selector, attr, value) => {
      document.querySelectorAll(selector).forEach((el) => {
        el.setAttribute('aria-pressed', el.dataset[attr] === value);
      });
    };
    syncPressed('.swatch', 'theme', html.dataset.theme);
    syncPressed('[data-size]', 'size', html.dataset.size);
    syncPressed('[data-layout]', 'layout', html.dataset.layout);
    const cbToggle = document.getElementById('cbToggle');
    if (cbToggle) cbToggle.checked = html.dataset.cb === 'on';

    document.querySelectorAll('.swatch').forEach((sw) => {
      sw.addEventListener('click', () => {
        html.dataset.theme = sw.dataset.theme;
        localStorage.setItem(KEYS.theme, sw.dataset.theme);
        syncPressed('.swatch', 'theme', sw.dataset.theme);
      });
    });
    if (cbToggle) {
      cbToggle.addEventListener('change', (e) => {
        html.dataset.cb = e.target.checked ? 'on' : 'off';
        localStorage.setItem(KEYS.cb, html.dataset.cb);
      });
    }
    document.querySelectorAll('[data-size]').forEach((btn) => {
      btn.addEventListener('click', () => {
        html.dataset.size = btn.dataset.size;
        localStorage.setItem(KEYS.size, btn.dataset.size);
        syncPressed('[data-size]', 'size', btn.dataset.size);
      });
    });
    document.querySelectorAll('[data-layout]').forEach((btn) => {
      btn.addEventListener('click', () => {
        html.dataset.layout = btn.dataset.layout;
        localStorage.setItem(KEYS.layout, btn.dataset.layout);
        syncPressed('[data-layout]', 'layout', btn.dataset.layout);
      });
    });
  });
})();
