document.addEventListener('DOMContentLoaded', () => {
  // Active nav link
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.header-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.style.color = '#FAFAFA';
    }
  });

  // Service tabs (servicios page)
  document.querySelectorAll('.service-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.service-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const target = tab.dataset.target;
      document.querySelectorAll('.service-detail').forEach(detail => {
        detail.style.display = detail.id === target ? '' : 'none';
      });
    });
  });
});
