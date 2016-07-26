var game = {};
exports.game = game;
var callbacks = {};
var config = require("./config.js").value;
var playersNotLogon = [];
var players = [];
var database = require("./database.js").database;
var sha256 = require("./sha256-min.js").hex_sha256;
exports.callbacks = callbacks;

game.playerConnected = function(p){
	playersNotLogon.push(p);
	p.logon = false;
	p.send("serverinfo",{nplayer : players.length,maxplayer : config.maxplayer});
}

game.playerDisconnected = function(p){
	if(p.logon){
		var index = players.indexOf(p);
		if(index) players.splice(index,1);
	}else{
		var index = playersNotLogon.indexOf(p);
		if(index) playersNotLogon.splice(index,1);
	}
}

callbacks.login = function(p,data){
	p.name=data.name;
}

callbacks.getscore = function(p,data){
	if(data.token){
		//从数据库查询token，返回查询到的分数，没有查询到success为false
		database.getScoreByToken(data.token,function(score){
			var ret={'token': data.token, 'score':score};
			if(score==-1) ret.success=false;
			else ret.success=true;
			p.send("getscoreret",ret);
		});
	}else{
		//生成一个token
		var tok=sha256((new Date().getTime()*1000+Math.random()*1000).toString());
		database.addToken(tok);
		p.send("getscoreret",{'success':true, 'token': tok, 'score': 0});
	}
}
