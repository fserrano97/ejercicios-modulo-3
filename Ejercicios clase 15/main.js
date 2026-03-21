const lista = document.getElementById("lista");
const formulario = document.getElementById("formulario");
const title = document.getElementById("titulo");
const contenido = document.getElementById("contenido");
const boton = document.getElementById("boton");
const mensaje = document.getElementById("mensaje");

async function CargarPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts/?_limit=5",
    );

    if (!response.ok) {
      throw new Error("Error fetching data");
    }

    const data = await response.json();
    
    data.forEach((post) => {
      const li = document.createElement("li");
      const h3 = document.createElement("h3");
      const p = document.createElement("p");
      const btnEditar = document.createElement("button");
      const btnEliminar = document.createElement("button");

      btnEliminar.classList.add("btn-eliminar");
      btnEditar.classList.add("btn-editar");
      p.classList.add("text-post")

      h3.textContent = post.title;
      p.textContent = post.body;
      btnEditar.textContent = "Editar";
      btnEliminar.textContent = "Eliminar";

      btnEliminar.addEventListener("click", () => {
        EliminarPost(post.id);
        li.remove();
      });

      btnEditar.addEventListener("click", () => {
        EditarPost(post.id);
        h3.textContent = "Título actualizado";
        p.textContent = "Contenido actualizado";
      });
      li.appendChild(h3);
      li.appendChild(p);
      li.appendChild(btnEditar);
      li.appendChild(btnEliminar);

      lista.appendChild(li);
    });
  } catch (error) {
    mensaje.textContent = "Error al cargar los posts.";
    console.error("Error fetching data:", error);
  }
}

async function EnviarPost() {
  const nuevoPost = {
    title: title.value,
    body: contenido.value,
  };
  try {
    mensaje.textContent = "Creando post...";

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(nuevoPost),
    });
    if (!response.ok) {
      throw new Error("Error creating post");
    }
    const data = await response.json();
    mensaje.textContent = "Post creado exitosamente!";
    title.value = "";
    contenido.value = "";
    console.log("Post creado:", data);

    const li = document.createElement("li");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const btnEditar = document.createElement("button");
    const btnEliminar = document.createElement("button");

    btnEliminar.classList.add("btn-eliminar");
    btnEditar.classList.add("btn-editar");
    p.classList.add("text-post")

    h3.textContent = data.title;
    p.textContent = data.body;
    btnEditar.textContent = "Editar";
    btnEliminar.textContent = "Eliminar";

    btnEliminar.addEventListener("click", () => {
      EliminarPost(data.id);
      li.remove();
    });

    btnEditar.addEventListener("click", () => {
      EditarPost(data.id);
    });

    li.appendChild(h3);
    li.appendChild(p);
    li.appendChild(btnEditar);
    li.appendChild(btnEliminar);

    lista.appendChild(li);
  } catch (error) {
    mensaje.textContent = "Error al crear el post.";
    console.error("Error creating post:", error);
  }
}

async function EliminarPost(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      },
    );
    if (!response.ok) {
      throw new Error("Error deleting post");
    }
    mensaje.textContent = "Post eliminado exitosamente!";
    console.log("Post eliminado");
  } catch (error) {
    mensaje.textContent = "Error al eliminar el post.";
    console.error("Error deleting post:", error);
  }
}

async function EditarPost(id) {
  const postActualizado = {
    title: "Título actualizado",
    body: "Contenido actualizado",
  };
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postActualizado),
      },
    );
    if (!response.ok) {
      throw new Error("Error editing post");
    }
    const data = await response.json();
    mensaje.textContent = "Post editado exitosamente!";
    console.log("Post editado:", data);
  } catch (error) {
    mensaje.textContent = "Error al editar el post.";
    console.error("Error editing post:", error);
  }
}

CargarPosts();

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  EnviarPost();
});
