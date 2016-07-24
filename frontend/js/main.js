var getbyid=function(id){
	return document.getElementById(id);
}

var socket = new Socket(serverUrl+":"+serverPort, function(){
	//注册回调函数
	$("#login").click(function(){
		if(getbyid("loginusername").disabled){
			//使用token，直接进入游戏
		
		}else{
			//发送注册信息
			socket.send("register",{"username":$("#loginusername").val()});
		}
	})
	
	var token=getCookie("token");
	if(token!=""){
		//使用原有的token登录
		socket.send("loginbytoken",{"token":token});
	}else{
		getbyid("loginusername").disabled = false;
		getbyid("loginusername").value = "";
		getbyid("loginusername").focus();
	}
});

