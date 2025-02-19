//20. Creación de un pequeño CRUD en memoria.

//Definimos un array con una tarea inicial

let tareas = [{ id: 1, descripcion: "Tarea de DAM", completado: false }];

//Definimos una nueva tarea para agregar

let tarea2 = {
  id: 2,
  descripcion: "Tarea IW",
  completado: false,
};

//Función para agregar una nueva tarea al array

function agregarTarea() {
  tareas.push(tarea2);
}

//Función para eliminar una tarea según su índice

function eliminarTarea(i) {
  tareas.splice(i);
}
//Función para marcar una tarea como completada

function completado(i) {
  tareas[i].completado = true;
}

console.log(tareas);
agregarTarea();
console.log(tareas);
