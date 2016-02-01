
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
				return (this.welcome);
			}
		// The menu message function
		/*
		Create a key named menu inside of the zoo object

console logs Enter (A): ------> to Add a new animal to the Zoo!
console logs Enter (U): ------> to Update info on an animal in the Zoo!
console logs Enter (V): ------> to Visit the animals in the Zoo!
console logs Enter (D): ------> to Adopt an animal from the Zoo!
console logs Enter (Q): ------> to Quit and exit the Zoo!

Hint: To make it pretty when displaying make sure to console log a empty line after every console log with a message
Hint: this will change many times in your app, because we are using the npm package prompt, 
and now we're using prompts within prompts, 
so, you should be storing this into a variable before you use this 
inside of a prompt callback function. 
Then you should be using that variable in the next function. 
This will get clearer as we move on.

*/

	var add = function(input_scope) {
		var currentScope = input_scope;
		console.log('To add an animal to the zoo please fill out the following form for us!');
		var prompt = require('prompt');
		prompt.start();
		prompt.get(['name','type', 'age'], function(err, result) {
			connection.query('INSERT INTO animal, (name, type, age) VALUES (?,?,?)';
			})
		}
	}

	}
    });
