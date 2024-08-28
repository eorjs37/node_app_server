const mariadb = require('mysql');

const conn = mariadb.createConnection(
	{
		host:'localhost',
		port:13307,
		user:'root',
		password:'3509',
		database:'nodedatabase'
	}
)

module.exports = conn;