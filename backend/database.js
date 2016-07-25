var database={};

exports.database=database;

database.open=function(filename){
	database.db = new (require('sqlite3').verbose()).Database('./data.db');
	if(!require("fs").existsSync(filename)){
		database.db.serialize(function() {
			database.db.run("CREATE TABLE scores (token TEXT, score INT)");
		});
	}
	/*database.db.serialize(function() {
		database.db.get("select count(*) from scores", function(err, res){
			database.tokenNum=res['count(*)'];
			console.log("读取到token的数量: " + database.tokenNum);
		});
	});*/
};

database.addToken=function(token){
	database.db.serialize(function() {	 
		var addToken = database.db.prepare("INSERT INTO scores VALUES (?, 0)");
		addToken.run(token);
		addToken.finalize();
	});
};

//callback: function(score). score will be -1 if the token does not exist.
database.getScoreByToken=function(token,callback){
	database.db.serialize(function() {	 
	  database.db.get("SELECT score FROM scores WHERE token='"+token+"'", function(err, row) {
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