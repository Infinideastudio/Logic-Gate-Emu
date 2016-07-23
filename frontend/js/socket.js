callbacks = {}

var Socket = function(serverurl, callback){
	this.ws = new WebSocket('ws://'+serverurl);
	this.ws.onopen = function(e) {
		callback();
		console.log("连接成功");
	};

	this.ws.onclose = function(e) {
		console.log("连接被关闭");
	};

	this.ws.onmessage = function(e) {
		var obj = JSON.parse(e.data);
		var cb = callbacks[obj[0]];
		if(cb) cb(obj[1]);
	}
};

Socket.prototype.send=function(type, args) {
	var data=[];
	data[0]=type;
	data[1]=args;
	this.ws.send(JSON.stringify(data));
}

callbacks.serverinfo = function(data){
	byid("serverinfo").innerHTML = "玩家人数：" + data.nplayer.toString() + "/" + data.maxplayer.toString();
	byid("loginusername").disabled = false;
	byid("loginusername").value = "";
	byid("loginusername").focus();
}

