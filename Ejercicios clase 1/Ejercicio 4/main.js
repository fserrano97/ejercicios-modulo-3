const boton = document.getElementById("btn");
const elementos = document.querySelectorAll(".destacado");

boton.addEventListener("click", () => {
elementos.forEach((item) => {
    item.style.color = "orange";  
});


});