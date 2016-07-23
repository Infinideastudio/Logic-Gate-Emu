var log = function(msg) {
	document.write("<p style=\"font-family:Consolas, 'Courier New', Courier, monospace;\">"+ msg + "</p>");
};

var Socket = function(serverurl, callback){
	this.ws = new WebSocket('ws://'+serverurl);
	this.ws.onopen = function(e) {
		log("Connected.");
		callback();
	};

	this.ws.onclose = function(e) {
		log("Disconnected");
	};

	this.ws.onmessage = function(e) {
		log("received: " + e.data);
	};

	this.ws.onerror = function(e) {
		log('error: ' + e.data);
	};
};
Socket.prototype.send=function(type, args) {
	var data={};
	data.type=type;
	data.data=args;
	data.timestamp=new Date().getTime();
	this.ws.send(JSON.stringify(data));
	log('send: '+JSON.stringify(data));
}
