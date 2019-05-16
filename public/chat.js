const socket = io()

// DOM elements
let message = document.getElementById('message');
let username = document.getElementById('username');
let btn = document.getElementById('send');
let output = document.getElementById('output');
let actions = document.getElementById('actions');

// Events and websockets
btn.addEventListener('click', function () {
	socket.emit('chat:message', {
		message: message.value,
		username: username.value
	});
});



// Listening index.js events
socket.on('chat:message', function (data){
	console.log(data);
	actions.innerHTML = '';
	output.innerHTML += `<p>
	<strong>${data.username}</strong>: ${data.message}
	</p>`
	
});