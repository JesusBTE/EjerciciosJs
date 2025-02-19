//14. Manejo de promesas

//Definimos una función que devuelve una promesa

function resolverPromesa() {
  // Creamos la promesa
  let promesa = new Promise(function (resolve, reject) {
    // Simulamos una operación asíncrona con setTimeout()
    setTimeout(function () {
      console.log("Promesa resuelta"); // Mensaje que se muestra después de 2 segundos
    }, 2000);
  });
  return promesa;
}

resolverPromesa();
