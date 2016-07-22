var http = require("http"),
	WebSocket = require("faye-websocket"),
	game = require("../game.js");

var sender = function(data){
	this.wssocket.send(data);
}

exports.bind = function(port){
	var server = http.createServer();

	server.on("upgrade", function(request, socket, body){
		if (WebSocket.isWebSocket(request)){
			var ws = new WebSocket(request, socket, body);
			var player = new game.player(sender,"websocket");
			player.wssocket = ws;

			ws.on("message", function(event){
				player.recive(event.data);
			});
		}
	});
	server.listen(port);
}
