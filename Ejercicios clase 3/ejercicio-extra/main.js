const contenedorCartas = document.getElementById("tablero");

// Array de valores
let valores = ["🍎", "🍌", "🍓", , "🍌", "🍓" , "🍎",];

let primeraCarta = null;
let segundaCarta = null;
let bloqueo = false;  // evita que cliqueen mientras comparamos

valores.forEach(valor => {

    // 1. Crear el elemento HTML
    const carta = document.createElement("div");

    // 2. Agregar clase
    carta.classList.add("carta");

    // 3. Guardar el valor oculto
    carta.dataset.valor = valor;

    // 4. Carta al inicio boca abajo
    carta.textContent = "";

    // 5. Evento click de CADA carta
    carta.addEventListener("click", function () {

        if (bloqueo) return; 
        if (carta === primeraCarta) return;

        // Mostrar la carta
        carta.textContent = carta.dataset.valor;

        // Guardar primera carta
        if (!primeraCarta) {
            primeraCarta = carta;
            return;
        }

        // Guardar segunda carta
        segundaCarta = carta;

        // Comparar
        compararCartas();
    });

    // Agregar al tablero
    contenedorCartas.appendChild(carta);
});

function compararCartas() {
    bloqueo = true;

    const valor1 = primeraCarta.dataset.valor;
    const valor2 = segundaCarta.dataset.valor;

    if (valor1 === valor2) {
        primeraCarta = null;
        segundaCarta = null;
        bloqueo = false;
    } else {
        setTimeout(() => {
            primeraCarta.textContent = "";
            segundaCarta.textContent = "";
            primeraCarta = null;
            segundaCarta = null;
            bloqueo = false;
        }, 1000);
    }
}
