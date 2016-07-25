var game = require("./game.js").game;
var callbacks = require("./game.js").callbacks;
var globalConnid = 0;
var player = function(sender,conntype){
	this.sender = sender;
	this.conntype = conntype; //连接类型(websocket,socket)
	this.connid = globalConnid++;
	this.name = "";
};
exports.player = player;

player.prototype.send = function(type,obj){
	this.sender(JSON.stringify([type,obj]));
};

player.prototype.recive = function(data){
	var obj = JSON.parse(data);
	var callback = callbacks[obj[0]]; //obj[0]: type
	if(callback) callback(this, obj[1]);  //obj[1]: args
}

player.prototype.connected = function(){
	game.playerConnected(this);
}

player.prototype.disconnected = function(){
	game.playerDisconnected(this);
}
