const idBoton = document.getElementById("boton");
const idContendor = document.getElementById("contenedor");

idBoton.addEventListener("click", () => {
    const parrafo = document.createElement("p");
    parrafo.textContent = "¡Hola! Soy un nuevo párrafo.";
    idContendor.appendChild(parrafo);
});