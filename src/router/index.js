const express = require("express");
const router = express.Router();


const user = require('./user')
const dummy = require('./dummy')

router.use("/",dummy)
router.use("/user",user)

module.exports = router;