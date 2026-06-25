function initNavigation() {
  const header = document.querySelector('.header');
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.header-nav');
  const overlay = document.querySelector('.overlay');
  const navLinks = document.querySelectorAll('.header-nav a');

  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
  }, { passive: true });

  function openMenu() {
    menuToggle.classList.add('active');
    nav.classList.add('open');
    overlay.classList.add('visible');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    menuToggle.classList.remove('active');
    nav.classList.remove('open');
    overlay.classList.remove('visible');
    document.body.style.overflow = '';
  }

  menuToggle.addEventListener('click', () => {
    nav.classList.contains('open') ? closeMenu() : openMenu();
  });

  overlay.addEventListener('click', closeMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) closeMenu();
  });
}

document.addEventListener('DOMContentLoaded', initNavigation);
