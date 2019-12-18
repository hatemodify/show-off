const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
// const SHOW_OFF = require('../model/showoff')

router.post('/addShow', (req, res) => {
  console.log(req.body)
  res.send('asdasd')
})

module.exports = router
