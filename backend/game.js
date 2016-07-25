var game = {};
exports.game = game;
var callbacks = {};
var players = [];
exports.callbacks = callbacks;

game.playerConnected = function(p){
	players.push(p);
	p.send("serverinfo",{nplayer : players.length});
}
game.playerDisconnected = function(p){
	for(var i=0;i<players.length;i++){
		if(players[i].connid==p.connid) players.splice(i, 1);
	}
}

callbacks.setname = function(p,data){
	p.name=data.name;
}

callbacks.getscore = function(p,data){
	if(data.token){
		//从数据库查询token，返回查询到的分数，没有查询到success为false
		
	}else{
		//生成一个token
		var t="TOKEN123456";
		p.send("getscore",{success:true, token: t,score: 0});
	}
}
