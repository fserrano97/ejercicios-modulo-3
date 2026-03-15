const button = document.getElementById('myButton');

button.addEventListener('click', () => {
    console.log('Inicio');

    setTimeout(() => {
        console.log('Timeout');
    }, 0);

    console.log('Fin');
});