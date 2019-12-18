const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')
const http = require('http')
const methodOverride = require('method-override')
const axios = require('axios')

const app = express()

const MongoClient = require('mongodb').MongoClient
const uri =
  'mongodb+srv://admin:asdasd@showoff-w62pe.gcp.mongodb.net/test?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true })
client.connect(err => {
  const collection = client.db('test').collection('devices')
  // perform actions on the collection object
  console.log('db conneted')
  client.close()
})

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(morgan('combined'))
app.use(
  bodyParser.json({
    limit: '50mb'
  })
)
app.use(cors())

app.use('/showoff', require('./router/showoff'))
app.use('/item', require('./router/item'))

http.createServer(app).listen(9998, function () {
  console.log('Https server listening on port ' + 9998)
})
