window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('popupBtn');
    const menu = document.getElementById('popupMenu');

    button.addEventListener('click', (event) => {
      event.stopPropagation(); // Prevent closing immediately
      const isVisible = menu.style.display === 'flex';
      menu.style.display = isVisible ? 'none' : 'flex';
      const rect = button.getBoundingClientRect();

      // Position it just under the button
      menu.style.position = 'absolute';
      menu.style.top = `${button.offsetTop + button.offsetHeight}px`;
      menu.style.left = `${button.offsetLeft}px`;
    });

    document.addEventListener('click', () => {
      menu.style.display = 'none';
    });

    menu.addEventListener('click', (e) => e.stopPropagation());
  });