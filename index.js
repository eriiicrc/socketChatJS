const path = require('path');
const express = require('express');
const app = express();


// settings
app.set('port', process.env.PORT || 8080);

// static files 
app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname + '/public');

// start the server
const server = app.listen(app.get('port'), () => {
	console.log('server on port', app.get('port'));
});

// websockets
const SocketIO = require('socket.io');
const io = SocketIO(server);

io.on('connection', (socket) => {
	console.log('new connection', socket.id);

	socket.on('chat:message', (data) => {
		io.sockets.emit('chat:message', data);
		console.log(data)

	});
	
});
