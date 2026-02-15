const correo = document.getElementById("correo");
const contraseña = document.getElementById("contraseña");
const botonEnviar = document.getElementById("boton-enviar");

let valor = "";
formulario.addEventListener('submit', function(event) {

    //evaluar el correo
    if (!correo.value.includes("@")) {
        document.getElementById("mensaje-correo").innerText = "El correo debe contener un @";
        event.preventDefault();
        valor = false
    }else{
        document.getElementById("mensaje-correo").innerText = "";
        valor = true
    }

    //evaluar la contraseña
    if (contraseña.value.length < 6) {
        document.getElementById("mensaje-contraseña").innerText = "La contraseña debe tener al menos 6 caracteres";
        event.preventDefault();
        valor = false
    }else{
        document.getElementById("mensaje-contraseña").innerText = "";
        valor = true
    }   

    if (valor) {
        alert("Formulario enviado correctamente");
    }  
});