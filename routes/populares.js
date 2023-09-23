const { Router } = require('express');
const { getPopulares, getIdPelicula, getFiltroPopulares, promesa } = require('../controllers/populares');

const rutas = Router();

rutas.get('/populares', getPopulares);
rutas.get('/populares_filtro', getFiltroPopulares);
rutas.get('/populares/:idPelicula', getIdPelicula);
/*
rutas.get('/estrenos', getEstrenos);
rutas.get('/actores', getActores);
rutas.get('/nombre/:name', getOrigenNombre);
*/
module.exports = rutas;