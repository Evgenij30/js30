var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function (req, res) {
         res.sendFile(__dirname+'/index.html');
});
http.listen(3000, function () {
    console.log(' Go to locallhost');
});

io.on('connection', function (socket) {
    console.log('A user commect');

    socket.on('disconnect', function () {
        console.log('a user disconect');
    });
});