var game = {};
exports.game = game;
var callbacks = {};
var players = [];

game.playerConnected = function(p){
	p.send("serverinfo",{nplayer : 0,maxplayer : 20});
}

