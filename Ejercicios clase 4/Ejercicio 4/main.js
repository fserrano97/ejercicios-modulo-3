const resuktado = document.getElementById("resultado");
const boton = document.getElementById("boton");

boton.addEventListener("click", function() {

    const colorElegido = document.querySelector('input[name="color"]:checked');
    
    let colorTexto ="";
    if (colorElegido) {
        colorTexto = "Color elegido: " + colorElegido.value;
    } else {
        colorTexto = "No se ha seleccionado ningún color.";
    }

    const pasatiempo = document.querySelectorAll('input[name="pasatiempo"]:checked');

    let listaPasatiempos = [];
    pasatiempo.forEach(p => listaPasatiempos.push(p.value));

     let pasaTexto = "";
    if (listaPasatiempos.length > 0) {
        pasaTexto = "Pasatiempos elegidos: " + listaPasatiempos.join(", ");
    } else {
        pasaTexto = "No elegiste ningún pasatiempo.";
    }

    // 3. Mostrar resultado
    resultado.innerText = colorTexto + "\n" + pasaTexto;
});

