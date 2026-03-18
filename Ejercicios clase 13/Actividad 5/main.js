const mensaje = document.getElementById("mensaje");
const contenido = document.getElementById("contenido");

fetch ("https://jsonplaceholder.typicode.com/posts/9999")
.then (response => {
    if (response.status === 404) {
        mensaje.textContent = "Post no encontrado";
        
        throw new Error ("El recurso no se ha encontrado");

    }
    else if (response.status === 200) {
        return response.json();
    }
})
.then (data => {
    contenido.innerHTML = data.title;
})
.catch (error => {
    mensaje.textContent = "Error al cargar el post";
    console.log(error.message);
})