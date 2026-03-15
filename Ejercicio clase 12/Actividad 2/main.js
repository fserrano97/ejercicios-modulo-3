    const lista = document.getElementById("lista");
    const carga = document.getElementById("carga");


fetch("https://jsonplaceholder.typicode.com/posts") //Obtenemos datos de la API
  .then(respuesta => respuesta.json()) //Convertimos la respuesta a formato js


 
  .then(data => {  
    carga.textContent = ""; //Limpiamos el mensaje de carga
    data.forEach(post => {//Recorremos el array de objetos con un forEach
    
      const li = document.createElement("li");//Creamos un elemento li por cada post
      li.textContent = post.title; //Asignamos el título del post al contenido del li
      lista.appendChild(li); //Agregamos el li a la lista en el HTML
    });}
    )
  .catch(error => {
    carga.textContent = "Error al cargar los datos"; //Mostramos un mensaje de error si falla la petición
    console.error("Error:", error); //Imprimimos el error en la consola
})