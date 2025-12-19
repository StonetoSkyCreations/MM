document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      const isOpen = navList.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const baseUrl = window.SITE_BASE || '';
  const pagePath = document.body ? document.body.dataset.pagePath : '';
  if (baseUrl && pagePath) {
    const canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.href = baseUrl + pagePath;
    }
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const twUrl = document.querySelector('meta[name="twitter:url"]');
    [ogUrl, twUrl].forEach(meta => {
      if (meta) meta.setAttribute('content', baseUrl + pagePath);
    });
  }

  const bookingEmbed = document.querySelector('[data-booking-embed]');
  if (bookingEmbed && bookingEmbed.dataset.src) {
    bookingEmbed.src = bookingEmbed.dataset.src;
  }
});
