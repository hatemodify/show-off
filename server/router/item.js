const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const axios = require('axios')
// const SHOW_OFF = require('../model/showoff')
const path = require('path')

router.post('/related', (req, res) => {
  console.log(req.body)

  axios
    .get(
      `https://openapi.naver.com/v1/search/shop.json?query=${encodeURIComponent(
        req.body.keyword
      )}&display=10&start=1&sort=sim`,
      {
        headers: {
          'X-Naver-Client-Id': 'WWTmwvzkeT_l1CVY2V5L',
          'X-Naver-Client-Secret': 'IK3vG8kYA3'
        }
      }
    )
    .then(r => res.send(r.data.items))
})


module.exports = router
