const express = require('express');
const router = express.Router();
const getConnection = require('../database/mariadb')
router.post("/",(_,res) =>{
	getConnection(conn=>{
		conn.query(`INSERT INTO ToDo VALUES('할일1')`);
		conn.release();
	})
	res.status(200)
	.json({
		success:true
	})
})

module.exports = router