const express = require('express');
const router = express.Router();
const pool = require('../database/mariadb')
router.post("/",(_,res) =>{
	pool.getConnection((err,conn)=>{
		if(err) return;

		conn.query("INSERT INTO ToDo(todo) VALUES('할일2')",(queryErr,callback)=>{
			if(queryErr) throw queryErr;
			res.status(200)
			.json({
				success:true
			})
		})
		if (conn) return conn.release();
	})
})

module.exports = router