const express = require('express');
const router = express.Router();

router.post("/userdummy1",({res}) =>{
	res.status(200).json({
		success:true
	})
})

module.exports = router;