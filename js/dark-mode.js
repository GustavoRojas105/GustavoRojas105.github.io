  const toggleBtn = document.getElementById('dark-mode-toggle');
  const body = document.body;

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    // Cambiar el icono dinámicamente
    const icon = toggleBtn.querySelector('i');
    if (body.classList.contains('dark-mode')) {
      icon.classList.replace('fa-moon-o', 'fa-sun-o');
    } else {
      icon.classList.replace('fa-sun-o', 'fa-moon-o');
    }
  });
