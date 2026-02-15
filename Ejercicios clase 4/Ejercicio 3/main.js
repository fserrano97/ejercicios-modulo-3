const textarea = document.getElementById("textarea");
const contador = document.getElementById("contador");

textarea.addEventListener("input", function () {
    contador.innerText = `${textarea.value.length} / 150`;
});