
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;

    console.log("Nombre: " + nombre);
    console.log("Edad: " + edad);
});