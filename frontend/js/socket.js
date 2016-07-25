callbacks = {}

var Socket = function(serverurl, callback){
	this.ws = new WebSocket('ws://'+serverurl);
	this.ws.onopen = function(e) {
		callback();
		log("连接成功");
	};

	this.ws.onclose = function(e) {
		log("连接被关闭");
	};

	this.ws.onmessage = function(e) {
		var obj = JSON.parse(e.data);
		var callback = callbacks[obj[0]]; //obj[0]: type
		if(callback) callback(obj[1]);  //obj[1]: args
		log("recevied:" + JSON.stringify(obj));
	}
};

Socket.prototype.send=function(type, args) {
	var data=[type, args];
	this.ws.send(JSON.stringify(data));
	log("sent:" + JSON.stringify(data));
}
