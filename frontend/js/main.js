var socket = new Socket(serverUrl+":"+serverPort, function(){
	socket.send("login", {username: "hello", password: "123456"});
});