const express = require('express');
//const crypto = require('crypto');
//const connection = require('./database/connection');
const routes = express.Router();
const ongcontroller = require('./Controllers/OngController');
const incidentcontroller = require('./Controllers/IncidentController');
const profilecontroler = require('./Controllers/ProfileController');
const sessioncontroller = require('./Controllers/SessionController');

routes.get('/ongs', ongcontroller.index);
routes.post('/ongs', ongcontroller.create);

routes.get('/profile', profilecontroler.index);

routes.post('/incidents', incidentcontroller.create);
routes.get('/incidents', incidentcontroller.list);
routes.delete('/incidents/:id', incidentcontroller.delete);

routes.post('/session', sessioncontroller.create);

module.exports = routes;