const express = require('express');
const app = express();
const port = 8000;
const colors = require("colors")


const listadeTareasJson = [
  { id: 1, title: 'Campeonato Soccer', description: 'Semifinal campeonato soccer', completed: false },
  { id: 2, title: 'Hacer tareas de ada', description: 'Realizar tareas de ada', completed: false },
];


app.get('/tareas', (req, res) => {
  res.json(listadeTareasJson);
});

app.listen(port, () => {
  console.log(`Servidor Funcionando : http://localhost:${port}`.green);
});
