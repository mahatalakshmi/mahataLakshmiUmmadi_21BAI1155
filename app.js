// calling the server and html file and making a connection using socket.io
var express = require('express');
var app = express();
app.use(express.static('public'));
var http = require('http').Server(app);
var port = process.env.PORT || 5000;
app.get('/', function(req, res) {
res.sendFile(__dirname + '/public/index.html');
});

http.listen(port, function() {
console.log('listening on : ' + port);
});
var io = require('socket.io')(http);
io.on('connection', function(socket) {
    console.log('new connection');
    socket.on('move', function(msg) {
    socket.broadcast.emit('move', msg);
    });
    });
