const mongoose = require('mongoose')
const Scheme = mongoose.Schema
const SHOW_OFF_MODEL = {
  // showOffId:{
  //   type:Number,
  //   require:true,
  // },
  images:{
    type:Array
  },
  likes:{
    type:Number,
    default:0
  },
  relatedItems:{
    type:Array
  },
  review:{
    type: Schema.Types.ObjectId, 
    ref: 'review' 
  },
  createdWho:{
    type:Scheme.Types.ObjectId,
    ref:'user'
  },
  createdAt:{
    type:Date,
    default: Date.now
  },
  updatedAt:{
    type:Date,
    default:Date.now
  }
}