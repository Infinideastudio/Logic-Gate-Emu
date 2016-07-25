var getbyid=function(id){
	return document.getElementById(id);
}

var socket = new Socket(serverUrl+":"+serverPort, function(){
	//注册回调函数
	$("#login").click(function(){
		socket.send("setname",{"name":$("#loginusername").val()});
		token=getCookie("token");
		if(token!=""){
			//获得分数
			socket.send("getscore",{"token":token});
		}else{
			//获得token
			socket.send("getscore",{});
		}
	});
});

getbyid("loginusername").focus();

callbacks.serverinfo = function(data){
	getbyid("serverinfo").innerHTML = "玩家人数：" + data.nplayer.toString();
}
callbacks.getscoreret = function(data){
	if(!data.success){
		log("ERR: token不存在");
	}else{
		if(token==""){token=data.token;score=data.score;}
		else score=data.score;
	}
}
