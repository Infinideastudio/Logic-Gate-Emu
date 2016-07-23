var http = require("http"),
	WebSocket = require("faye-websocket"),
	player = require("../player.js").player;

var sender = function(data){
	this.wssocket.send(data);
}

exports.bind = function(port){
	var server = http.createServer();

	server.on("upgrade", function(request, socket, body){
		if (WebSocket.isWebSocket(request)){
			var ws = new WebSocket(request, socket, body);
			var p = new player(sender,"websocket");
			p.wssocket = ws;
			p.connected();
			
			ws.on("message", function(event){
				p.recive(event.data);
			});
		}
	});
	server.listen(port);
}
