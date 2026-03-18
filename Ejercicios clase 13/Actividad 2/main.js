const text = document.getElementById("message");
const lista = document.getElementById("post");

 text.innerHTML = "Cargando...";

fetch("https://jsonplaceholder.typicode.com/posts")
.then((response) => response.json())

.then((data) => {
    text.textContent = "";

    data.forEach((post) => {
        const li = document.createElement("li");
        li.textContent = post.title;
        lista.appendChild(li);
    });
})
.catch((error) => {
    text.innerHTML = "Error al cargar los datos";
    console.error("Error:", error);
});
