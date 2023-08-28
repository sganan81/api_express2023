require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World')
});


app.get('/home', function (req, res) {
    res.json({text: 'Estamos en casa'});
});

app.get('/render', function (req, res) {
  res.json({text: 'Estamos deployando nuestra app en render'});
});

app.listen(port, () =>{    
    console.log(`App escuchando en el puerto ${port}`);
});