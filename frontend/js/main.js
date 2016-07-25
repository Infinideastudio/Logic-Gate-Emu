var getbyid=function(id){
	return document.getElementById(id);
}

var socket = new Socket(serverUrl+":"+serverPort, function(){
	//注册回调函数
	$("#login").click(function(){
		socket.send("login",{"name":$("#loginusername").val()});
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
