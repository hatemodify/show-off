const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const SHOW_OFF = require("../model/showoff");
const ImgList = require("../image");

// router.get('/addShow', (req, res) => {
//   const a = new SHOW_OFF({
//     imgUrl: [],
//     likes: 102020,
//     relatedItems: [],
//     cretedAt: new Date()
//   })
//   a.save(err => {
//     if (err) {
//       res.send(err)
//     }
//   })
// })
router.get("/addShow", (req, res) => {
	const str = "abcdefghijklmnopqrs";
	let stringArr = [];
	let title = "";

	stringArr = str.split("");

	console.log(ImgList[20].url);

	for (let i = 0; i <= 10; i++) {
		title = title + stringArr[Math.floor(Math.random() * 10) + 1];
	}

	const a = new SHOW_OFF({
		title,
		imageUrl: ImgList[randomNumber(20)].download_url,
		likes: randomNumber(100),
		relatedItems: [],
		description:
			"Snow White, based on 16th century German fashionSnow White, based on Snow White, based on 16th century German fashionSnow White, based on"
	});
	a.save((err, s) => {
		console.log(err, s);
	});
	res.send("aaaa");
});

router.get("/list", (req, res) => {
	SHOW_OFF.find({}, (err, data) => {
		res.send(data);
	});
});
router.get("/detail/:id", (req, res) => {
	const _id = req.params.id;

	SHOW_OFF.find({ _id }, (err, data) => {
		res.send(data);
	});
});

function randomNumber(num) {
	return Math.floor(Math.random() * num) + 1;
}

module.exports = router;
