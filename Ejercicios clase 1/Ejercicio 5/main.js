const imagen = document.getElementById("imagen");
const boton = document.getElementById("botonImg");

let mostrandoFoto1 = true;

boton.addEventListener("click", () => {
    if (mostrandoFoto1) {
        imagen.setAttribute("src", "/Ejercicios clase 1/Ejercicio 5/images/reyleon2.webp");
        mostrandoFoto1 = false;
    } else {
        imagen.setAttribute("src", "/Ejercicios clase 1/Ejercicio 5/images/reyleon.webp");
        mostrandoFoto1 = true;
    }
});