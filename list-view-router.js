const express = require('express');
const app = express();
const port = 3000;

let listaDeTareas = [
  {
    id: "1",
    descripcion: "sacar al perro",
    estaCompletada: false
  },
  {
    id: "2",
    descripcion: "pagar la luz",
    estaCompletada: false
  }
];

app.get('/mostrarTareas', function(req, res) {
  res.send(console.log(listaDeTareas));
});

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
