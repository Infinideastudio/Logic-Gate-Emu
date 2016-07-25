var game = {};
exports.game = game;
var callbacks = {};
var players = [];
var database = require("./database.js").database;
var sha256 = require("./sha256-min.js").hex_sha256;
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
		database.getScoreByToken(data.token,function(score){
			var ret={'token': data.token, 'score':score};
			if(score==-1) ret.success=false;
			else ret.success=true;
		});
	}else{
		//生成一个token
		//var tok=sha256(database.tokenNum.toString());
		var tok=sha256((new Date().getTime()*1000+Math.random()*1000).toString());
		database.addToken(tok);
		database.tokenNum++;
		p.send("getscore",{'success':true, 'token': tok, 'score': 0});
	}
}
