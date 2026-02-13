const padre = document.getElementById("padre");
const abuelo = document.getElementById("abuelo");
const hijo = document.getElementById("hijo");

hijo.addEventListener("click", function(event) {
    console.log("Hiciste click en el hijo");
    event.stopPropagation();
});

padre.addEventListener("click", function(event) {
    console.log("Hiciste click en el padre");
    event.stopPropagation();
});         

abuelo.addEventListener("click", function(event) {
    console.log("Hiciste click en el abuelo");
    event.stopPropagation();
}   );  