const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const SHOW_OFF = require("../model/showoff");

router.get("/addShow", (req, res) => {
	const a = new SHOW_OFF({
		imgUrl: [],
		likes: 102020,
		relatedItems: [],
		cretedAt: new Date()
	});
	a.save(err => {
		if (err) {
			res.send(err);
		}
	});
});
router.get("/list", (req, res) => {
	const a = new SHOW_OFF({
		imgUrl: [],
		likes: 102020,
		relatedItems: [],
		title: "test Item",
		description:
			"Snow White, based on 16th century German fashionSnow White, based on "
	});
	a.save((err, s) => {
		console.log(err, s);
	});
	res.send("aaaa");
});

module.exports = router;
