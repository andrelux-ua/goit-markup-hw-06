document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
  const currentPath = window.location.pathname.split('/').pop();

  links.forEach(link => {
    const linkPath = link.getAttribute('href');

    if (
      (linkPath === 'index.html' &&
        (currentPath === '' || currentPath === 'index.html')) ||
      linkPath === currentPath
    ) {
      link.classList.add('current');
    } else {
      link.classList.remove('current'); // 🔧 Додаємо це!
    }
  });
});
