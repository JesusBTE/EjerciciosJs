//12. Reducir un array.

//Definimos un arreglo con diferentes precios

let precios = [10, 20, 30, 40];

//Usamos el método reduce() para sumar todos los valores del arreglo

const sumaPrecios = precios.reduce(
  (acumulador, valor) => acumulador + valor,
  0
);

//Imprimimos el resultado en consola

console.log("Suma:", sumaPrecios);
