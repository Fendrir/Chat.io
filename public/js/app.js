(function () {
    
        $(function () {
            var socket = io();
            $('#chat').submit(function (e) {
                e.preventDefault()
                socket.emit('chat message', $('#chat-text').val());
                $('#chat-text').val('');
            });
            socket.on('message', function (msg) {
                console.log(msg)
                $('#message').append('<p>'+msg.user+': '+msg.message+'</p>');
            });

            socket.on('service-message', function(user){

                $("#message").append('<p>'+user+ 'is connected </p>');

            });

            $("#login").submit(function(e){

                e.preventDefault();
                var username = $('#username');
                socket.emit('login', username.val());
                username.val();
                $('#chat').removeClass('hidden');
                $('#login').addClass('hidden');

            })

        });
    
    })()