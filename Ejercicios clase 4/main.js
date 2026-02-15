
const formulario = document.getElementById("formulario");

if (formulario) { 
    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        const nombre = document.getElementById("nombre").value;

        window.location.href = "bienvenida.html?nombre=" + encodeURIComponent(nombre);
    });
}

const mensaje = document.getElementById("mensaje");

if (mensaje) { 
    const params = new URLSearchParams(location.search);
    const nombre = params.get("nombre");

    mensaje.innerText = "Bienvenida, " + nombre + "!";
}
