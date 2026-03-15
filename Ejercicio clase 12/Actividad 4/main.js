const button = document.getElementById("btn");
const message = document.getElementById("mensaje");

 
button.addEventListener("click", () => {
    //Se deshabilita el botón
 button.disabled = true;

  //Despues de 3 seg se activa el boton otra vez
    setTimeout(() => {
        button.disabled = false;    
        //Se muestra el mensaje
        message.textContent = "¡Listo!";
    }, 3000);
}

)