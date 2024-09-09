const express = require('express');
const router = express.Router();
const pool = require('../database/mariadb');
router.post("/",(_,res) =>{
	pool.getConnection((err,conn)=>{
		if(err) return;
		conn.query("INSERT INTO ToDo(todo) VALUES('할일4')",(queryErr,result)=>{
			if(!queryErr){
				res.status(200)
				.json({
					success:true,
					result
				})
			}else{
				throw queryErr
			}
		})
	})
})

router.get("/",(_,res)=>{
	pool.getConnection((err,conn)=>{
		if(err) return;
		conn.query("SELECT * FROM ToDo",(queryErr,result)=>{
			if(!queryErr){
				res.status(200)
				.json({
					success:true,
					result:{
						todolist:result
					}
				})

				if (conn) return conn.release();
			}else{
				throw queryErr
			}
		})


	})
})

module.exports = router