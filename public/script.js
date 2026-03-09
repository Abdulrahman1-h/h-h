document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.mobile-menu');
  const iconOpen = document.getElementById('icon-menu');
  const iconClose = document.getElementById('icon-close');

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    iconOpen.style.display = open ? 'none' : 'block';
    iconClose.style.display = open ? 'block' : 'none';
  });

  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      iconOpen.style.display = 'block';
      iconClose.style.display = 'none';
    });
  });

  // Year in footer
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
