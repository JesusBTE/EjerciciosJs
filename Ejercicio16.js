//16. Expresiones regulares

//Definimos una cadena con un correo electrónico

let cadena1 = "chompiras@gmail.com";

//Función para validar correos electrónicos
function validarEmail(cadena) {
  //Expresión regular para validar un correo electrónico
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //Verifica si la cadena cumple con el patrón del email
  return emailPattern.test(cadena);
}

//Validamos el correo almacenado en 'cadena1'

if (validarEmail(cadena1)) {
  console.log("Correo valido"); //Si es válido, se imprime este mensaje
} else {
  console.log("Correo no valido"); //Si es válido, se imprime este mensaje
}
