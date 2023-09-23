const express = require('express');
const app = express();
const port = 3000;
const colors = require("colors")


const listaTareas = [
  { id: 1, title: 'Entrenamiento', description: 'Entrenamiento microfutbol 1pm', completed: false },
  { id: 2, title: 'Sacar a las mascotas', description: 'Dar un paseo a los mascotas', completed: false },
];

app.get('/tareas', (req, res) => {
  res.json(listaTareas);
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`.blue);
});