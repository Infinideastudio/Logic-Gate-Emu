var wsServer = 'ws://localhost:7999';
var ws = new WebSocket(wsServer);

var log = function(msg) {
	document.write("<p style=\"font-family:Consolas, 'Courier New', Courier, monospace;\">"+ msg + "</p>");
};

var sendMessage = function(msg) {
    ws.send(msg);
    log("send: " + msg);
};

ws.onopen = function(e) {
    log("Connected.");
    sendMessage("hello");
};

ws.onclose = function(e) {
    log("Disconnected");
};

ws.onmessage = function(e) {
    log("received: " + e.data);
    ws.close();
};

ws.onerror = function(e) {
    log('error: ' + e.data);
};