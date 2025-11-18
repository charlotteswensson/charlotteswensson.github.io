document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const stickyBio = document.getElementById('sticky-bio');

  scrollSpy('nav', { offset: 100, sectionClass: 'section' });

  const headerObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        stickyBio.classList.toggle('active', !entry.isIntersecting);
      });
    },
    { threshold: 0.1 },
  );

  headerObserver.observe(header);
});
