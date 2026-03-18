fetch("https://example.com")
  .then(respuesta => respuesta.json())
  .then(data => {
    console.log(data);
  });