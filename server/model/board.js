const mongoose = require('mongoose')
const Scheme = mongoose.Schema
const BOARD_MODEL = {
  boardId: {
    type: Number,
    require: true
  },
  boardName: {
    type: String,
    require: true
  },
  showOff: {
    type: Array
  }
}
