var token = "";
var score = 0;

callbacks.serverinfo = function(data){
	getbyid("serverinfo").innerHTML = "玩家人数：" + data.nplayer.toString() + "/" + data.maxplayer.toString();
}

callbacks.getscoreret = function(data){
	if(!data.success){
		log("ERR: token不存在");
	}else{
		if(token==""){token=data.token;score=data.score;}
		else score=data.score;
	}
}
