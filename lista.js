const readline = require('readline');
const colors = require('colors')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const tareas = [];

function agregarTarea() {
  rl.question('Descripción de la tarea: ', (descripcion) => {
    tareas.push({
      descripcion,
      completada: false
    });
    console.log('Tarea añadida con éxito.'.green);
    mostrarMenu();
  });
}

function eliminarTarea() {
  mostrarTareas();
  rl.question('Número de tarea a eliminar: ', (numeroTarea) => {
    const indice = parseInt(numeroTarea) - 1;
    if (indice >= 0 && indice < tareas.length) {
      tareas.splice(indice, 1);
      console.log('Tarea eliminada con éxito.'.green);
    } else {
      console.log('Número de tarea no válido.'.red);
    }
    mostrarMenu();
  });
}

function completarTarea() {
  mostrarTareas();
  rl.question('Número de tarea a marcar como completada: ', (numeroTarea) => {
    const indice = parseInt(numeroTarea) - 1;
    if (indice >= 0 && indice < tareas.length) {
      tareas[indice].completada = true;
      console.log('Tarea marcada como completada.'.green);
    } else {
      console.log('Número de tarea no válido.'.red);
    }
    mostrarMenu();
  });
}

function listarTareas() {
  mostrarTareas();
  mostrarMenu();
}

function mostrarTareas() {
  if (tareas.length === 0) {
    console.log('No hay tareas registradas.'.red);
  } else {
    console.log('Lista de tareas:');
    tareas.forEach((tarea, index) => {
      const estado = tarea.completada ? 'Completada'.green : 'Pendiente'.red;
      console.log(`${index + 1}. [${estado}] ${tarea.descripcion}`);
    });
  }
}

function mostrarMenu() {
  rl.question(
    '\nSelecciona una opción:\n1. Añadir tarea\n2. Eliminar tarea\n3. Completar tarea\n4. Listar tareas\n5. Salir\n'.yellow,
    (opcion) => {
      switch (opcion) {
        case '1':
          agregarTarea();
          break;
        case '2':
          eliminarTarea();
          break;
        case '3':
          completarTarea();
          break;
        case '4':
          listarTareas();
          break;
        case '5':
          rl.close();
          break;
        default:
          console.log('Opción no válida.'.red);
          mostrarMenu();
      }
    }
  );
}

console.log('Bienvenido a tu LISTA DE TAREAS'.yellow);
mostrarMenu()