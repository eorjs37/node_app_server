const express = require('express');
const router = express.Router();

router.get("/userdummy1",({res}) =>{
	console.log("call userdummy1");

	res.status(200).json({
		success:true
	})
})

module.exports = router;