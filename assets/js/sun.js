// Depth — automatic light/dark based on the visitor's local sunrise/sunset.
// Falls back to the OS-level prefers-color-scheme if geolocation is denied
// or unavailable — never assumes the site owner's timezone for a visitor.
// Manual override (Light / Dark / Auto) always wins over the automatic pick.
(function () {
  const html = document.documentElement;
  const KEY_APPEAR = 'depth-appear';
  let appearMode = localStorage.getItem(KEY_APPEAR) || 'auto';

  // Standard solar position formulas (sunrise equation), computed client-side.
  function getSunTimes(date, lat, lon) {
    const rad = Math.PI / 180, dayMs = 864e5, J1970 = 2440588, J2000 = 2451545;
    const toDays = (d) => (d.valueOf() / dayMs - 0.5 + J1970) - J2000;
    const e = rad * 23.4397;
    const solarMeanAnomaly = (d) => rad * (357.5291 + 0.98560028 * d);
    const eclipticLongitude = (M) => {
      const C = rad * (1.9148 * Math.sin(M) + 0.02 * Math.sin(2 * M) + 0.0003 * Math.sin(3 * M));
      return M + C + rad * 102.9372 + Math.PI;
    };
    const declination = (l, b) => Math.asin(Math.sin(b) * Math.cos(e) + Math.cos(b) * Math.sin(e) * Math.sin(l));
    const julianCycle = (d, lw) => Math.round(d - 0.0009 - lw / (2 * Math.PI));
    const approxTransit = (Ht, lw, n) => 0.0009 + (Ht + lw) / (2 * Math.PI) + n;
    const solarTransitJ = (ds, M, L) => J2000 + ds + 0.0053 * Math.sin(M) - 0.0069 * Math.sin(2 * L);
    const hourAngle = (h, phi, d) => Math.acos((Math.sin(h) - Math.sin(phi) * Math.sin(d)) / (Math.cos(phi) * Math.cos(d)));
    const fromJulian = (j) => new Date((j + 0.5 - J1970) * dayMs);

    const lw = rad * (-lon), phi = rad * lat;
    const d = toDays(date);
    const n = julianCycle(d, lw);
    const ds = approxTransit(0, lw, n);
    const M = solarMeanAnomaly(ds);
    const L = eclipticLongitude(M);
    const dec = declination(L, 0);
    const Jnoon = solarTransitJ(ds, M, L);
    const h0 = rad * -0.833;
    const w = hourAngle(h0, phi, dec);
    const a = approxTransit(w, lw, n);
    const Jset = solarTransitJ(a, M, L);
    const Jrise = Jnoon - (Jset - Jnoon);
    return { sunrise: fromJulian(Jrise), sunset: fromJulian(Jset) };
  }

  function setModeFromSun(lat, lon, statusEl) {
    const now = new Date();
    const { sunrise, sunset } = getSunTimes(now, lat, lon);
    const isDay = now >= sunrise && now < sunset;
    html.dataset.mode = isDay ? 'light' : 'dark';
    if (statusEl) {
      const fmt = (d) => d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      statusEl.textContent = `Auto — ${isDay ? 'day' : 'night'} locally. Sunrise ${fmt(sunrise)}, sunset ${fmt(sunset)}.`;
    }
  }

  function applyAppearance(statusEl) {
    if (appearMode === 'light') { html.dataset.mode = 'light'; if (statusEl) statusEl.textContent = 'Manual — light.'; return; }
    if (appearMode === 'dark') { html.dataset.mode = 'dark'; if (statusEl) statusEl.textContent = 'Manual — dark.'; return; }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => setModeFromSun(pos.coords.latitude, pos.coords.longitude, statusEl),
        () => {
          const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
          html.dataset.mode = prefersLight ? 'light' : 'dark';
          if (statusEl) statusEl.textContent = 'Auto — location unavailable, using your system setting.';
        },
        { timeout: 4000 }
      );
    } else {
      const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
      html.dataset.mode = prefersLight ? 'light' : 'dark';
      if (statusEl) statusEl.textContent = 'Auto — using your system setting.';
    }
  }

  // Set a sane default immediately (before geolocation resolves) to avoid a jarring flash.
  html.dataset.mode = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';

  document.addEventListener('DOMContentLoaded', () => {
    const statusEl = document.getElementById('modeStatus');
    applyAppearance(statusEl);
    setInterval(() => { if (appearMode === 'auto') applyAppearance(statusEl); }, 5 * 60 * 1000);

    document.querySelectorAll('[data-appear]').forEach((btn) => {
      btn.setAttribute('aria-pressed', btn.dataset.appear === appearMode);
      btn.addEventListener('click', () => {
        appearMode = btn.dataset.appear;
        localStorage.setItem(KEY_APPEAR, appearMode);
        document.querySelectorAll('[data-appear]').forEach((b) => b.setAttribute('aria-pressed', b === btn));
        applyAppearance(statusEl);
      });
    });
  });
})();
