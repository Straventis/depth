// Depth — L2 content renderer.
// All project content lives in assets/data/l2.json, not in this file or
// the HTML. To update L2 — a new project, a reworded result — edit that
// JSON and push. No HTML changes needed.
(function () {
  let projects = [];

  function render(order) {
    const list = document.getElementById('projList');
    if (!list) return;
    list.innerHTML = '';
    const ordered = order === 'oldest' ? projects.slice() : projects.slice().reverse();
    ordered.forEach((p, i) => {
      const el = document.createElement('details');
      el.className = 'proj';
      if (i === 0) el.open = true;
      el.innerHTML = `
        <summary>
          <div><span class="path">${p.org}</span><h3>${p.title}</h3></div>
          <span class="chevron">▾</span>
        </summary>
        <div class="body">
          <div class="field"><div class="k">The problem</div><p>${p.problem}</p></div>
          <div class="field"><div class="k">My role</div><p>${p.role}</p></div>
          <div class="field"><div class="k">What shipped</div><p>${p.delivered}</p></div>
          <div class="field"><div class="k">Why it mattered</div><p>${p.why}</p></div>
        </div>`;
      list.appendChild(el);
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    fetch('/assets/data/l2.json')
      .then((r) => r.json())
      .then((data) => {
        projects = data;
        render('recent');
        const btnRecent = document.getElementById('sortRecent');
        const btnOldest = document.getElementById('sortOldest');
        if (btnRecent && btnOldest) {
          btnRecent.addEventListener('click', () => {
            render('recent');
            btnRecent.setAttribute('aria-pressed', 'true');
            btnOldest.setAttribute('aria-pressed', 'false');
          });
          btnOldest.addEventListener('click', () => {
            render('oldest');
            btnOldest.setAttribute('aria-pressed', 'true');
            btnRecent.setAttribute('aria-pressed', 'false');
          });
        }
      })
      .catch((err) => { console.error('Depth: L2 content failed to load —', err); });
  });
})();
