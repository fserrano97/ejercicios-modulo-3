const form = document.getElementById('formulario');
const btn = document.getElementById('boton')
const title= document.getElementById('title')
const content = document.getElementById('body')
const message = document.getElementById('mensaje')

btn.addEventListener('click', (e) => {
    e.preventDefault();
    // Crear un nuevo post con los datos del formulario un objeto con las propiedades title y body
    const post = {
        title: title.value,
        body: content.value,
    }

    message.textContent = 'Enviando...'

    fetch('https://jsonplaceholder.typicode.com/posts', {
        // Enviar el post al servidor utilizando el método POST y el endpoint de la API
        method: 'POST',
        body: JSON.stringify(post), 
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },

    })
    // Manejar la respuesta del servidor y mostrar un mensaje de éxito o error en el DOM
    .then(response => response.json())
    .then(data => {
        message.textContent = 'Post Creado!';
        console.log(data);
    })
    .catch(error => {
        message.textContent = 'Error al enviar el post';
        console.error('Error:', error);
    });
})
    

