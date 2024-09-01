const express = require('express');
const router = express.Router();

router.get("/dummy",(_,res)=>{
	console.log("call /api/dummy");

	res.status(200).json({
		"message":"TEST1"
	})
})

router.post("/savedummy",({res})=>{
	console.log("call savedummy");

	res.status(200).json({
		"success":true
	})
})

module.exports = router;