const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const path = require('path');
const http = require('http');

const formation = require('./assets/json/formation.json');
const experiences = require('./assets/json/experiences.json');
const projets = require('./assets/json/projets.json');
const references = require('./assets/json/references.json');
const sports = require('./assets/json/sports.json');
const profil = require('./assets/json/profil.json');
const divers = require('./assets/json/divers.json');

const app = express();
const options = {
    customCssUrl: "/css",
    customSiteTitle: "Ubisoft - Candidature",
    customfavIcon: "/favicon"
};

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    return next();
});
app.use(express.static('assets'));
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));


app.get('/formation', (req, res) => {
    res.status(200).json({ 'formation': formation });
});

app.get('/experiences', (req, res) => {
    res.status(200).json({ 'experiences': experiences });
});

app.get('/projets', (req, res) => {
    res.status(200).json({ 'projets': projets });
});

app.get('/references', (req, res) => {
    res.status(200).json({ 'references': references });
});

app.get('/sports', (req, res) => {
    res.status(200).json({ 'sports': sports });
});

app.get('/profil', (req, res) => {
    res.status(200).json({ 'profil': profil });
});

app.get('/divers', (req, res) => {
    res.status(200).json({ 'divers': divers });
});

app.get('/favicon', function (req, res) {
    res.sendFile(path.join(__dirname + '/assets/img/favicon.png'));
});

app.get('/logo', function (req, res) {
    res.sendFile(path.join(__dirname + '/assets/img/ubisoft.png'));
});

app.get('/css', function (req, res) {
    res.sendFile(path.join(__dirname + '/assets/css/style.css'));
});


http.createServer(app).listen(7000);
