// Header hairline once the page has scrolled
const head = document.getElementById('siteHead');
const onScroll = () => head.classList.toggle('is-stuck', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Mobile menu
const burger = document.getElementById('burger');
const nav = document.getElementById('nav');
burger.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  burger.setAttribute('aria-expanded', String(open));
  burger.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
});
nav.addEventListener('click', (e) => {
  if (e.target.closest('a')) {
    nav.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
  }
});

// Scroll reveal
const targets = document.querySelectorAll(
  [
    '.section-label', '.h2', '.lede', '.tick', '.job', '.band-caption p',
    '.ref-table', '.kit-table', '.note', '.kit article', '.partner',
    '.media-2 figure', '.contact-block', '.btn-lg',
    '.page-title', '.page-sub',
    '.prose > *', '.hub > *', '.team article', '.docs li',
    '.fig-grid figure', '.gallery img', '.gallery-head',
    '.form', '.map', '.next-nav a'
  ].join(', ')
);
targets.forEach((el, i) => {
  el.classList.add('reveal');
  el.style.transitionDelay = (i % 6) * 40 + 'ms';
});

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  },
  { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
);
targets.forEach((el) => io.observe(el));
