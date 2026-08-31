const sectionIds = ["about", "education", "research", "publications", "interests", "news", "contact"];
const navLinks = document.querySelectorAll('.nav-link');
const header = document.getElementById('top-header');
const revealBlocks = document.querySelectorAll('.reveal-block');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const getHeaderOffset = () => (header ? header.offsetHeight + 12 : 0);

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
    window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
});

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const activeId = entry.target.id;
      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${activeId}`;
        link.classList.toggle('active', isActive);
      });
    });
  },
  { rootMargin: '-30% 0px -55% 0px', threshold: 0.02 }
);

sectionIds.forEach((id) => {
  const section = document.getElementById(id);
  if (section) sectionObserver.observe(section);
});

if (!prefersReducedMotion) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.18 }
  );

  revealBlocks.forEach((block) => revealObserver.observe(block));
} else {
  revealBlocks.forEach((block) => block.classList.add('in-view'));
}

const updateHeaderState = () => {
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 16);
};

updateHeaderState();
window.addEventListener('scroll', updateHeaderState, { passive: true });
