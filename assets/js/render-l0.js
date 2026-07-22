// Depth — L0 content renderer.
// All career-era content lives in assets/data/l0.json, not in this file
// or the HTML. To update L0, edit that JSON and push — no HTML changes needed.
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const mount = document.getElementById('erasList');
    if (!mount) return;
    fetch('/assets/data/l0.json')
      .then((r) => r.json())
      .then((eras) => {
        eras.forEach((era) => {
          const companyHtml = era.link
            ? `<a href="${era.link}" target="_blank" rel="noopener">${era.company}</a>`
            : era.company;
          const metricsHtml = era.metrics.map((m) => `<li>${m}</li>`).join('');
          const el = document.createElement('div');
          el.className = 'era';
          el.innerHTML = `
            <div class="erahead"><span class="company">${companyHtml}</span><span class="years">${era.years}</span></div>
            <div class="role">${era.role}</div>
            <p class="narrative">${era.narrative}</p>
            <ul class="metrics">${metricsHtml}</ul>
            <span class="sig">${era.signature}</span>`;
          mount.appendChild(el);
        });
      })
      .catch((err) => { console.error('Depth: L0 content failed to load —', err); });
  });
})();
