const btn = document.getElementById("boton");
const text = document.getElementById("mensaje");
const btn2 = document.getElementById("boton2");

function obtenerDatos() {
  //mostramos mensaje de cargando a iniciar la pagina
  //hacemos la peticion a la api
  text.innerHTML = "Cargando...";

  //validamos la respuesta de la api, si no es correcta lanzamos un error
  fetch("https://jsonplaceholder.typicode.com/INVALIDO")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error");
      }
      return response.json();
    })
    
    .then((data) => {
      mensaje.textContent = "Datos cargados correctamente";
    })
    .catch((error) => {
      mensaje.textContent = "Error al cargar los datos";
      btn2.style.display = "inline";
    });
}

//botones al hacer click llamamos a la funcion
btn.addEventListener("click", obtenerDatos);
btn2.addEventListener("click", obtenerDatos);
