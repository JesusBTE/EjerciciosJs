//15. Uso de async/await

//Función que devuelve una promesa

function resolverPromesa() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Promesa resuelta"); //Se resuelve la promesa con un valor
    }, 2000);
  });
}

//Función asíncrona que espera la resolución de la promesa

async function asyncPromesa() {
  console.log("Llamando");
  //Se usa 'await' para esperar a que la promesa se resuelva
  const resultado = await resolverPromesa();
  //Una vez resuelta la promesa, se muestra el resultado
  console.log(resultado);
}

asyncPromesa();
