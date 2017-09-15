var express = require('express');


var morgan = require('morgan'); // Charge le middleware de logging

var favicon = require('serve-favicon'); // Charge le middleware de favicon


var app = express();


app.use(morgan('combined')) // Active le middleware de logging

.use(express.static(__dirname + '/public')) // Indique que le dossier /public contient des fichiers statiques (middleware chargé de base)

.use(favicon(__dirname + '/public/favicon.ico')) // Active la favicon indiquée

.use(function(req, res){ // Répond enfin

    res.send('Hello');

});



app.get('/', function(req, res) {

    res.setHeader('Content-Type', 'text/plain');

    res.end('Vous êtes à l\'accueil');

});

// route accueil

app.get('/', function(req, res) {
    
        res.setHeader('Content-Type', 'text/plain');
    
        res.end('Vous êtes à l\'accueil, que puis-je pour vous ?');
    
    });

// ... Tout le code de gestion des routes (app.get) se trouve au-dessus

app.use(function(req, res, next){
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
});

app.listen(8080);