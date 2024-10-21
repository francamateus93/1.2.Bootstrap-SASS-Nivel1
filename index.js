  document.getElementById('submitButton').addEventListener('click', function (event) {
  event.preventDefault();

  const emailInput = document.getElementById('emailInput');
  const errorMessage = document.getElementById('errorMessage');

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Comprueba si el campo está vacío o el correo electrónico no tiene el formato correcto
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