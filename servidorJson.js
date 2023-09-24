const http = require('http');
const port = 3000;
const colors = require("colors")

const listaTareas = [
  { id: 1, title: 'Entrenamiento', description: 'Entrenamiento microfutbol 1pm', completed: false },
  { id: 2, title: 'Sacar a las mascotas', description: 'Dar un paseo a los mascotas', completed: false },
];

const server = http.createServer((req, res) => {
  if (req.url === '/tareas' && req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(listaTareas));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('error : Digite /tareas en el metodo get');
  }
});

server.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`.blue);
});
