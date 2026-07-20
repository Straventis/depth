// Depth — highlights the current page in the nav bar based on the URL path.
(function () {
  document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname.replace(/\/index\.html$/, '/');
    document.querySelectorAll('.navlinks a.tab').forEach((a) => {
      const href = a.getAttribute('href');
      const isHome = href === '/' && (path === '/' || path === '/index.html');
      const isMatch = href !== '/' && path.startsWith(href);
      a.setAttribute('aria-current', isHome || isMatch ? 'true' : 'false');
    });
  });
})();
