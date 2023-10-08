const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());


const users = [
  { id: 1, username: "admin", password: "adminpassword" },
  { id: 2, username: "user", password: "userpassword" },
];

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username && user.password === password);

  if (!user) {
    return res.status(401).json({ error: "Invalid username or password" });
  }


  const token = jwt.sign({ userId: user.id, username: user.username }, process.env.SECRET_KEY, {
    expiresIn: '1h', 
  });

  res.json({ token });
});


function validateToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Token not provided' });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: 'Invalid token' });
    }

    req.user = decoded;
    next();
  });
}

app.get('/protected-route', validateToken, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the authentication example' });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corre en ${PORT}`);
});
