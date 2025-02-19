//19. Simulación de un endpoint con fetch (JSONPlaceholder)

//Realizamos una petición GET a la api JSONPlaceholder

fetch("https://jsonplaceholder.typicode.com/todos/1")
  // Convertimos la respuesta a JSON
  .then((response) => response.json())
  // Mostramos los datos obtenidos en consola
  .then((data) => console.log(data));
