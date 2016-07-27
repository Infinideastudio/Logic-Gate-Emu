var database = {};

exports.database = database;

database.open = function(filename){
	database.db = new (require('sqlite3').verbose()).Database('./data.db');
	if(!require("fs").existsSync(filename)){
		database.db.serialize(function() {
			database.db.run("CREATE TABLE scores (token TEXT, score INT);");
		});
	}
};

var addToken = database.db.prepare("INSERT INTO scores VALUES (?, 0);");
database.addToken = function(token){
	database.db.serialize(function() {
		addToken.run(token);
	});
};

//callback: function(score). score will be -1 if the token does not exist.
var getToken = database.db.prepare("SELECT score FROM scores WHERE token=?;")
database.getScoreByToken = function(token,callback){
	database.db.serialize(function() {	 
	  getToken.get(token, function(err, row) {
		if(row){
			callback(row.score);
		}else{
			callback(-1);
		}
	  });
	});
};

database.close=function(){
	database.db.close();
};