document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  if (toggle && navList) {
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
        navList.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open menu');
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

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal');
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
    }, { threshold: 0.15 });
    revealElements.forEach(el => observer.observe(el));
  }

  const faqToggles = document.querySelectorAll('.faq-question');
  faqToggles.forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      const answer = btn.nextElementSibling;
      btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
      if (answer) {
        const isOpen = !expanded;
        answer.classList.toggle('is-open', isOpen);
        answer.hidden = !isOpen;
      }
    });
  });
});
