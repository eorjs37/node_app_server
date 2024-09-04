const mariadb = require('mysql');

const pool = mariadb.createPool(
	{
		host:'localhost',
		port:13307,
		user:'root',
		password:'3509',
		database:'nodedatabase'
	}
)

function getConnection(callback) {
	pool.getConnection((err,conn)=>{
		if(!err){
			callback(conn)
		}else{
			console.log(err);

		}
	})
}

module.exports = getConnection;