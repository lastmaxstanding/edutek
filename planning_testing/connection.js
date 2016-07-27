var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password:'', //process.argv[2]
	database: 'roster_db'
})

connection.connect(function(err) {
	if (err) throw err;
	console.log('connected as id' + connection.threadId);
});


connection.query('SELECT * FROM Top5000', function(err,data) {
if (err) throw err;
console.log(data);
});


