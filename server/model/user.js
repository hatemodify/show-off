const mongoose = require('mongoose')
const Schema = mongoose.Schema
const USER_MODEL = {
  userId: {
    type: String,
    require: true
  },
  userEmail: {
    type: String,
    require: true
  },
  showOff: {
    type: Array
  },
  likes: {
    type: Array
  },
  board: {
    type: Array
  }
}
