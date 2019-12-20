const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const SHOW_OFF = require('../model/showoff')

router.get('/addShow', (req, res) => {
  SHOW_OFF.find({}, (err, data) => {
    console.log(data)
    res.send(data)
  })
})

module.exports = router
