const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SHOW_OFF_MODEL = {
	// showOffId:{
	//   type:Number,
	//   require:true,
	// },
	imageUrl: {
		type: Array
	},
	likes: {
		type: Number,
		default: 0
	},
	relatedItems: {
		type: Array
	},
	// review: {
	//   type: Schema.Types.ObjectId,
	//   ref: 'review'
	// },
	// createdWho: {
	//   type: Scheme.Types.ObjectId,
	//   ref: 'user'
	// },
	createdAt: {
		type: Date,
		default: Date.now
	},
	updatedAt: {
		type: Date,
		default: Date.now
	}
};
const showOffSchema = new Schema(SHOW_OFF_MODEL);
module.exports = mongoose.model("showoff", showOffSchema);
