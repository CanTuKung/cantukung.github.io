const sectionIds = ["about", "education", "research", "publications", "interests", "news", "contact"];
const navLinks = document.querySelectorAll('.nav-link');

const getHeaderOffset = () => {
  const header = document.querySelector('.top-header');
  return header ? header.offsetHeight + 16 : 0;
};

navLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    const target = document.querySelector(href);
    if (!target) return;

    event.preventDefault();
    const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
    window.scrollTo({ top, behavior: 'smooth' });
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
  { rootMargin: '-35% 0px -55% 0px', threshold: 0.01 }
);

sectionIds.forEach((id) => {
  const section = document.getElementById(id);
  if (section) sectionObserver.observe(section);
});

const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((element) => revealObserver.observe(element));
