const botonId = document.getElementById("btnColor");

botonId.addEventListener("click", () => {
    const colores = ["pink", "lightgreen", "yellow", "lightblue", "lavender"];
    const random = Math.floor(Math.random() * colores.length);
    document.body.style.backgroundColor = colores[random];
});