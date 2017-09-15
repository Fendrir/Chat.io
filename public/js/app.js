(function(){

    var socket= io();

    $('#chat').submit(function(e){

        e.preventDefault()
        var message = $("#chat-text");

        socket.emit('message-send' ,message.val());

        message.val('');

    });

});