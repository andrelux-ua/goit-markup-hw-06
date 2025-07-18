const items = document.querySelectorAll('.prt-item');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  },
  { threshold: 0.95 }
);

items.forEach(item => observer.observe(item));
