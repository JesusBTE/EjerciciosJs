//9.  Manipulación de objetos

//Definimos un objeto con información de una persona

let persona = {
  nombre: "Otmar",
  edad: "52",
  profesion: "Maestro",
};

//Agregamos una nueva propiedad 'nacionalidad' utilizando Object.defineProperty()

Object.defineProperty(persona, "nacionalidad", { value: "Francesa" });

//Imprimimos la nueva propiedad en consola

console.log(persona.nacionalidad);
