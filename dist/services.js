document.querySelectorAll('.nav-link[data-section]').forEach(link => {
  link.addEventListener('click', () => {
    const section = link.getAttribute('data-section');

    if (section === 'home') {
      window.location.href = 'index.html'; // Navigate to index.html
    } else {
      window.location.href = section + '.html'; // Navigate to section.html
    }
  });
});
