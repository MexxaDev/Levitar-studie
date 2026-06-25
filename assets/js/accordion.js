function initAccordions() {
  document.querySelectorAll('.accordion').forEach(accordion => {
    const header = accordion.querySelector('.accordion-header');
    const content = accordion.querySelector('.accordion-content');

    header.addEventListener('click', () => {
      const isActive = accordion.classList.contains('active');

      accordion.classList.toggle('active');

      if (accordion.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + 'px';
      } else {
        content.style.maxHeight = '0';
      }
    });
  });
}

document.addEventListener('DOMContentLoaded', initAccordions);
