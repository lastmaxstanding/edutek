var mysql = require('mysql');

// var JAWSDB_URL = "mysql://f8qp8z4dx56mdbce:snzplnc6c86v8p6a@nj5rh9gto1v5n05t.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/rc5weekag9d2166c";

var connection = mysql.createConnection(process.env.JAWSDB_URL);

// var connection = mysql.createConnection({
// 	host: 'localhost' || process.env.IP,
// 	port: 3306,
// 	user: 'root',
// 	password: '' || process.argv[2],
// 	database: 'roster_db'
// })

// connection.connect(function(err) {
// 	if (err) throw err;
// 	console.log('Connected To Database!');
// });


connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});


module.exports = connection;