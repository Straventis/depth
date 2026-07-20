// Depth — certification badges, rendered above the footer.
// This is a static site with no server, so JS can't literally scan a
// folder's contents at request time. This is the practical equivalent:
// drop your (already-resized) badge image into assets/badges/, then add
// its filename to assets/badges/manifest.json. Everything else — layout,
// wrapping to a second row, spacing — happens automatically via CSS flexbox.
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const row = document.getElementById('badgeRow');
    if (!row) return;
    fetch('/assets/badges/manifest.json')
      .then((r) => r.json())
      .then((files) => {
        files.forEach((filename) => {
          const img = document.createElement('img');
          img.src = `/assets/badges/${filename}`;
          img.alt = filename.replace(/\.[^.]+$/, '').replace(/[-_]/g, ' ');
          img.loading = 'lazy';
          row.appendChild(img);
        });
      })
      .catch(() => { /* no manifest yet, or none reachable — badges bar just stays empty/hidden */ });
  });
})();
