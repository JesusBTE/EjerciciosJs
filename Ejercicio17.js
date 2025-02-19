//17. Transformación de texto

//Definimos una cadena de texto

let cadena = "Hola, cómo estás?";

//Usamos replace() para eliminar las comas y toUpperCase() para convertir el texto a mayúsculas

console.log(cadena.replace(/,/g, "").toUpperCase());
