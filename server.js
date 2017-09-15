var express = require('express');
var app = express();
// var bodyParser = require('body-parser');
var socket = require('socket.io');
var server = app.listen(1337);
var io = socket(server);

app.use(express.static('public'));
app.use(express.static('node_modules'));

io.on('connection', function(socket){

    console.log('user connected');
    socket.on('disconnect', function(){

        console.log('user disconnected')

    });

    socket.on('message-send', function(msg){
        
            console.log(msg);
        
        });

});