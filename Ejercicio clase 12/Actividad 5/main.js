const boton = document.getElementById("btn");
const p = document.getElementById("mensaje");

// Agregar un evento click al botón
boton.addEventListener("click", () => {
    // Llamar a la función para obtener los datos
    obtenerDatos();
});


// Función para obtener los datos de la API
async function obtenerDatos() {

   // Intentar obtener los datos de la API
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/INVALIDO");

        // Verificar si la respuesta es correcta
        if (!response.ok) {
            // Si la respuesta no es correcta, mostrar un mensaje de error en el párrafo:
            p.innerHTML = "Error al obtener los datos";
            return;
        }

       //error en el sevidor, mostrar un mensaje de error
    } catch (error) {
        p.innerHTML = "Error al obtener los datos"
        return;
    }
}