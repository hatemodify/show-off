const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const SHOW_OFF = require('../model/showoff');
const ImgList = require('../image');
const axios = require('axios');
const ITEM_LIST = require('../ITEM');

router.get('/addShow', (req, res) => {
	const str = 'abcdefghijklmnopqrs';
	let stringArr = [];
	let title = '';

	stringArr = str.split('');

	for (let i = 0; i <= 10; i++) {
		title = title + stringArr[Math.floor(Math.random() * 10) + 1];
	}

	const a = new SHOW_OFF({
		title,
		imageUrl: ImgList[randomNumber(20)].download_url,
		likes: randomNumber(100),
		relatedItems: [ITEM_LIST[randomNumber(4)], ITEM_LIST[randomNumber(3)]],
		description:
			'Snow White, based on 16th century German fashionSnow White, based on Snow White, based on 16th century German fashionSnow White, based on',
	});

	a.save((err, s) => {
		console.log(err, s);
	});
	res.send(a);
});

router.get('/list', (req, res) => {
	SHOW_OFF.find({}, (err, data) => {
		res.send(data);
	});
});
router.get('/detail/:id', (req, res) => {
	const _id = req.params.id;

	SHOW_OFF.findOne({ _id }, (err, data) => {
		res.send(data);
	});
});
router.get('/related/:name/:start', (req, res) => {
	const { name, start } = req.params;
	axios
		.get(
			`https://openapi.naver.com/v1/search/shop.json?query=${encodeURIComponent(
				name
			)}&display=10&start=${start}&sort=sim`,
			{
				headers: {
					'X-Naver-Client-Id': 'WWTmwvzkeT_l1CVY2V5L',
					'X-Naver-Client-Secret': 'IK3vG8kYA3',
				},
			}
		)
		.then((response) => {
			console.log(response.data);
			res.send(response.data);
		});
});

function randomNumber(num) {
	return Math.floor(Math.random() * num) + 1;
}

module.exports = router;
