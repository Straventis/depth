// Depth — shows when the site was last deployed.
// last-updated.json is generated fresh by the GitHub Actions workflow on
// every push (see .github/workflows/static.yml), so this always reflects
// the real deploy time, not a manually-edited date that goes stale.
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('lastUpdated');
    if (!el) return;
    fetch('/last-updated.json')
      .then((r) => r.json())
      .then((data) => {
        if (data.display) el.textContent = `Last updated ${data.display}`;
      })
      .catch(() => { /* file not present yet (e.g. local dev, first deploy) — leave blank */ });
  });
})();
