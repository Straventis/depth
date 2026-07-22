// Depth — L1 content renderer.
// All resume content lives in assets/data/l1.json, not in this file or the
// HTML. To update L1 — a new role, a reworded summary, a new skill chip —
// edit that JSON and push. No HTML changes needed.
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('l1Content');
    if (!root) return;
    fetch('/assets/data/l1.json')
      .then((r) => r.json())
      .then((d) => {
        const rolesHtml = d.roles.map((r) => {
          const companyHtml = r.link
            ? `<a href="${r.link}" target="_blank" rel="noopener">${r.company}</a>`
            : r.company;
          const bulletsHtml = r.bullets.map((b) => `<li>${b}</li>`).join('');
          return `<div class="rolegroup"><div class="rowhead"><span class="company-name">${companyHtml}</span><span class="dates">${r.dates}</span></div>
            <div class="title">${r.title}</div>
            <ul>${bulletsHtml}</ul></div>`;
        }).join('\n');

        const skillsHtml = d.skills.map((s) => `<span class="chip">${s}</span>`).join('');
        const eduHtml = d.education.map((e) => `<span>${e}</span>`).join('');

        root.innerHTML = `
          <div class="page-header">
            <div class="page-header-text">
              <div class="eyebrow">${d.eyebrow}</div>
              <h1 style="font-size:2.25rem; margin-bottom:8px;">${d.name}</h1>
              <div class="role">${d.role}</div>
            </div>
          </div>
          <div class="summary">${d.summary}</div>
          ${rolesHtml}
          <h4 class="eyebrow" style="display:block; margin-bottom:10px;">Areas of expertise</h4>
          <div class="skillchips">${skillsHtml}</div>
          <div class="edu">${eduHtml}</div>
          <div class="more" style="margin-top:24px;"><a href="/depthL2/">See all 11 projects in full context → /depthL2</a></div>
        `;
      })
      .catch((err) => { console.error('Depth: L1 content failed to load —', err); });
  });
})();
