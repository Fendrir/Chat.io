var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var socket = require('socket.io');
var server = app.listen(1337);
var io = socket(server);
var ent = require('ent');

app.use(express.static('public'));
app.use(express.static('node_modules'));

//Action sur la connection
io.on('connection', function(socket){
    var loggedUser;
    socket.on('login', function(user){

        loggedUser = ent.encode(user);
        socket.broadcast.emit('service-message', loggedUser);

    });

    socket.on('chat message', function(msg){
        var message = ent.encode(msg);
        // console.log(msg);
        // console.log('message: ' + msg);
        io.emit('message', {message: message, user: loggedUser});
        
    });
    console.log('User has connected');
    //Action à la deconnection
    socket.on('disconnect', function(){
        console.log('User is disconnected !')
});

});