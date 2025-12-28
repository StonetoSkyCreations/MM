document.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('is-loaded');

  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  if (toggle && navList) {
    toggle.setAttribute('aria-label', 'Open menu');

    const closeNav = () => {
      navList.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Open menu');
    };

    toggle.addEventListener('click', () => {
      const isOpen = navList.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
      if (isOpen) {
        const firstLink = navList.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    });

    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        closeNav();
      });
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && navList.classList.contains('open')) {
        closeNav();
        toggle.focus();
      }
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

  const bookingContainer = document.querySelector('[data-booking-container]');
  if (bookingContainer) {
    const applyTitle = () => {
      const iframe = bookingContainer.querySelector('iframe');
      if (iframe && !iframe.title) {
        iframe.title = 'Booking calendar for Michael Multhaup Counselling';
      }
    };

    const observer = new MutationObserver(() => applyTitle());
    observer.observe(bookingContainer, { childList: true, subtree: true });
    applyTitle();
  }

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal, .stagger');
  if (prefersReduced) {
    revealElements.forEach(el => el.classList.add('is-visible'));
  } else if (revealElements.length) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.18 });
    revealElements.forEach(el => observer.observe(el));
  }
});
