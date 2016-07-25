var net = require("net"),
	player = require("../player.js").player;

var sender = function(data){
	this.ssocket.write(data);
}

exports.bind = function(port){
	var server = net.createServer(function(s){
		var p = new player(sender,"socket");
		p.ssocket = s;
		p.connected();
		
		s.on('data',function(data){
			p.recive(data);
		});
		s.on('end', function() {
			p.disconnected();
		});
	});
	server.listen(port);
}
