
// Menu Toggle

const menuToggle = document.getElementById('menuToggle');
const menuOverlay = document.getElementById('menuOverlay');
const navbarNav = document.getElementById('navbarNav');
const navLinks = document.querySelectorAll('.nav-link');

menuToggle.addEventListener('click', function() {
menuOverlay.style.display = menuOverlay.style.display === 'block' ? 'none' : 'block';
  if (menuOverlay.style.display === 'block') {
    navbarNav.style.display = 'none';
  } else {
    navbarNav.style.display = '';
  }
});

document.getElementById('logoutButton').addEventListener('click', function() {
menuOverlay.style.display = 'none';

});

navLinks.forEach(link => {link.addEventListener('click', function() {
  menuOverlay.style.display = 'none';
  });
});

// Input Form

document.getElementById('submitButton').addEventListener('click', function (event) {
event.preventDefault();
  
const emailInput = document.getElementById('emailInput');
const errorMessage = document.getElementById('errorMessage');
  
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
// Comprueba si está vacío o el correo electrónico no está correcto

if (emailInput.value.trim() === '') {
    errorMessage.textContent = 'Introduce una dirección de correo electrónico.';
    errorMessage.classList.remove('d-none');
  } else if (!emailPattern.test(emailInput.value)) {
    errorMessage.textContent = 'Asegúrate de que sea un correo electrónico.';
    errorMessage.classList.remove('d-none');
  } else {
    errorMessage.classList.add('d-none');
    alert('¡Formulario enviado exitosamente!');
  }
  });