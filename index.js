
//Creating the Node.js connection to MySQL

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zoo_db'
});
connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        };
        //clearconsole.log('connected as id ' + connection.threadId);
  var zoo = {
		welcome: "Welcome to the Zoo And Friends App~!",
			function(welcome){
				console.log(this.welcome);
				return;
	}
}
    });
