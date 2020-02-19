const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const USER = require("../model/user");

router.get("/list", (req, res) => {
	USER.find({}, (err, data) => {
		res.send(data);
	});
});
router.get("/list", (req, res) => {
	SHOW_OFF.find({}, (err, data) => {
		// console.log(d);
		console.log(data);
		res.send(data);
	});
});

module.exports = router;
