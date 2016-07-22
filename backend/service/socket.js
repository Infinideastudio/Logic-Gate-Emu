var net = require("net"),
	game = require("../game.js");

var sender = function(data){
	this.ssocket.write(data);
}

exports.bind = function(port){
	var server = net.createServer(function(s){
		var player = new game.player(sender,"socket");
		player.ssocket = s;
		
		s.on('data',function(data){
			player.recive(data)
		});
	});
	server.listen(port);
}
