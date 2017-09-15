(function () {
    
        $(function () {
            var socket = io();
            $('#chat').submit(function (e) {
                e.preventDefault()

                if ($('#chat-text').val()!==('')){

                    socket.emit('chat message', $('#chat-text').val());
                    $('#chat-text').val('');

                }else{

                    $('#erreur-message').html('Veuillez entrer un message !');

                };

                $('#chat-text').focus();

            });
            socket.on('message', function (msg) {
                console.log(msg)
                $('#message').prepend('<p>'+msg.user+': '+msg.message+'</p>');
            });

            socket.on('service-message', function(user){

                $("#message").prepend('<p>'+user+ ' is connected </p>');

            });

            $("#login").submit(function(e){

                e.preventDefault();

                if ($('#username').val()!==('')){

                    
                    var username = $('#username');
                    socket.emit('login', username.val());
                    username.val('');
                    $('#chat').removeClass('hidden');
                    $('#login').addClass('hidden');
                    $('#chat-text').focus();
                }else{

                    $('#erreur').html('entrez un pseudonyme !');

                };
            })

        });
    
    })()