const express = require("express");
const router = express.Router();


const user = require('./user')
const dummy = require('./dummy')
const todo = require('./todo')
router.use("/",dummy)
router.use("/user",user)
router.use("/todo",todo)
module.exports = router;