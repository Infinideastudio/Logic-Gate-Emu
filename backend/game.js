var player = function(sender,conntype){
	this.sender = sender;
	this.conntype = conntype; //连接类型(websocket,socket)
};
exports.player = player;

player.prototype.send = function(obj){
	this.sender(JSON.stringify(obj));
};

player.prototype.recive = function(data){
	try{
		var obj = JSON.parse(data);
	}catch(e){
		return;
	}
	var ret = {};
	ret.t = "echo";
	ret.json = obj
	this.send(ret);
}