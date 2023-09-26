¿Qué sucedio al usar async y await?

Las funciones agregarTarea, eliminarTarea, y completarTarea las puse como funciones async 
Dentro de estas funciones, se utilizan await alrededor de las operaciones que toman tiempo, como setTimeout. 
Esto permite que la función espere a que se complete el setTimeout antes de continuar con la siguiente instrucción.
En la función principal que maneja la entrada del usuario (rl.question), también se utilizan await alrededor de las llamadas a las funciones asincrónicas.
Esto asegura que las operaciones asincrónicas dentro de las funciones se completen antes de continuar con la ejecución.

¿Qué sucedio al usar el método then()?

En las funciones agregar , eliminar y completar ,cada una de ellas retorna una promesa que se resuelve después de completar la operación asincrónica, y se utiliza .then(() => {...}) para
realizar alguna acción adicional después de que la operación haya finalizado. En estos casos, se cierra la interfaz de lectura (rl.close()) después de agregar, completar o eliminar una tarea.

¿Qué diferencias encontraste entre async, await y el método then()?

Con async y await se puede hacer un código más legible , mientras que then() utiliza una estructura de cadena que puede volverse difícil de entender 
otra diferencia puede ser que async y await facilitan el manejo de errores mediante el uso del try-catch . En cambio, con then(), normalmente se usa .catch() para manejar errores.
