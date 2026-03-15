const formulario = document.getElementById("formulario");
const titulo = document.getElementById("titulo");
const contenido = document.getElementById("contenido");
const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");
//capturamos el envio del formulario y evitamos que se recargue la página
formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    //Mostramos un mensaje de que se están enviando los datos
    async function enviarDatos() {
        mensaje.textContent = "Enviando"; 

        //Realizamos la petición POST a la API con los datos del formulario
     const respuesta = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: titulo.value,
                body: contenido.value,
            }
            )
        })
        //Esperamos la respuesta de la API y simulamos un retraso para mostrar el mensaje de envío
        await respuesta.json()
      await  new Promise(resolve => setTimeout(resolve, 2000));
        mensaje.textContent = "Datos enviados"; 
    }
    //Llamamos a la función para enviar los datos
    enviarDatos()
})