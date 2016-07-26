var token = "";
var score = 0;

callbacks.serverinfo = function(data){
	getbyid("serverinfo").innerHTML = "玩家人数：" + data.nplayer.toString() + "/" + data.maxplayer.toString();
}

callbacks.getscoreret = function(data){
	if(!data.success){
		log("ERR: token"+token+"不存在");
		socket.send("getscore",{});
	}else{
		if(token==""){token=data.token;score=data.score;}
		else score=data.score;
		setCookie("token", token);
		$("#gameview_canvas").attr("width",window.innerWidth*0.8)
		$("#gameview_canvas").attr("height",window.innerHeight-$("#footer").height())
		$("#loginbox").hide();
		$("#gameview").show();
	}
}
