(function () {
    
        $(function () {
            var socket = io();
            $('#chat').submit(function (e) {
                e.preventDefault()
                socket.emit('chat message', $('#chat-text').val());
                $('#chat-text').val('');
            });
            socket.on('chat message', function (msg) {
                $('#message').append('<p>'+msg+'</p>');
            });
        });
    
    })()