const express = require("express");
const router = express.Router();

const user = require("./user");
const dummy = require("./dummy");
const todo = require("./todo");
const file = require("./fileManage");
router.use("/", dummy);
router.use("/user", user);
router.use("/todo", todo);
router.use("/file", file);
module.exports = router;
