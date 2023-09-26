const readline = require('node:readline');
const colors =require("colors")

let listaDeTareas = [{
    id: "1",
    descripcion: "Entrenamiento Micro futbol",
    estaCompletada: false
},
{
    id: "2",
    descripcion: "Ir al gym",
    estaCompletada: false 
}];

function mostrarTareas (){
    console.log(listaDeTareas);
}

function agregarTarea(id, descripcion){

    let nuevaTarea = {
        id:id,
        descripcion: descripcion,
        estaCompletada: false
    };
    listaDeTareas.push(nuevaTarea);
};



function eliminarTarea (id) {
    listaDeTareas = listaDeTareas.filter(tarea => tarea.id !== id )
};


    
function completarTarea ( id ) {

    let tareaCompletada = listaDeTareas.find(tarea => tarea.id === id);

    if(tareaCompletada) {
        tareaCompletada.estaCompletada = true;
    } else {
        console.log('La tarea no se encuentra en la lista'.red);
    }
};




const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('\nLISTA DE TAREAS \n\nElige una opcion :\n\n1 Listar tareas  \n2 añadir tarea \n3 completar tarea, \n4 Eliminar tarea'.green, (respuesta) => {
     console.log(`Haz elegido ${respuesta}`.yellow)

     switch (respuesta) {
        case '1':
            console.log(mostrarTareas())
            break;
            case '2':
                rl.question('Ingrese el ID de la nueva tarea: ', (id) => {
                    rl.question('Ingrese la descripción de la nueva tarea: ', (descripcion) => {
                        rl.question('¿La tarea está completada? (true/false): ', (estaCompletada) => {
                            agregarTarea(id, descripcion, estaCompletada === 'false');
                            console.log('Tarea agregada '.green);
                            rl.close();
                        });
                    });
                });
            break;
        case '3':
            rl.question('ingrese el numero de id  '.green, (id)=> {
                completarTarea( id );
                console.log('Tarea completada '.green);
                rl.close();
            });
            break;
        case '4':
            rl.question('ingrese el numero de id  '.green, (id)=> {
                eliminarTarea( id );
                console.log('Tarea borrada'.green);
                rl.close();            
           });
           break;
           default:
            console.log('Opcion invalida'.red);
            rl.close();
            break;
      
    }});