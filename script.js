// Obtener referencia al formulario
const form = document.getElementById('contact-form');

// Escuchar el evento submit del formulario
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario

  // Obtener los valores de los campos del formulario
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Validar los campos
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert('Por favor, completa todos los campos del formulario.');
  } else {
    // Enviar el formulario (aquí puedes agregar tu lógica de envío real)
    alert('¡Formulario enviado correctamente!');
    form.reset(); // Limpiar los campos del formulario
  }
});
