document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.prt-item');

  if (items.length === 0) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // знімаємо спостереження після появи
        }
      });
    },
    {
      threshold: 0.1, // елемент має бути хоча б на 10% у вʼюпорті
    }
  );

  items.forEach(item => observer.observe(item));
});
