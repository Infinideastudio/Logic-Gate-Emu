var config = require("./config.js").value,
	websocket = require("./service/websocket.js"),
	socket = require("./service/socket.js"),
	game = require("./game.js");

console.log("Logic Gate Emulator 逻辑门模拟器");
console.time("启动时间");

var bound = false;

if(config.bindWebsocket != -1){
	websocket.bind(config.bindWebsocket);
	console.log("绑定Websocket到端口 " + config.bindWebsocket.toString());
	bound = true;
}

if(config.bindSocket != -1){
	socket.bind(config.bindSocket);
	console.log("绑定Socket到端口 " + config.bindSocket.toString());
	bound = true;
}

if(bound == false){
	console.log("没有设置绑定任何服务，检查 config.js!")
}

console.timeEnd("启动时间");
