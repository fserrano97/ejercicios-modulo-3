const enlace = document.getElementById("enlace");

enlace.addEventListener("click", function(event) {
    event.preventDefault(); 
    alert("¡No puedes ir a YouTube!");
});