const path = require('path');

const express = require('express');
const app = express();

// Path to set public folder as static
const publicPath = path.resolve(__dirname, 'public');
app.use(express.static('public'));

app.listen(3031, () => console.log('El servidor esta corriendo en: http://localhost:3031'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
});

app.get('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/registro.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/login.html'))
});

app.post('/login', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
});

app.post('/registro', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
});