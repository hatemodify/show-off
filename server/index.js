const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");
const path = require("path");
const http = require("http");
const methodOverride = require("method-override");
const axios = require("axios");

const app = express();

// mongoose.connect(
// 	"mongodb://admin:asdasd12@ds037498.mlab.com:37498/healing-place",
// 	{ useNewUrlParser: true }
// );
mongoose.connect(
	"mongodb://admin:asdasd12@ds037498.mlab.com:37498/healing-place",
	{ useNewUrlParser: true }
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));

db.once("open", callbak => {
	console.log("db connection success");
});

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(morgan("combined"));
app.use(
	bodyParser.json({
		limit: "50mb"
	})
);
app.use(cors());

app.use("/showoff", require("./router/showoff"));
app.use("/item", require("./router/item"));
app.use("/user", require("./router/user"));

http.createServer(app).listen(9998, function() {
	console.log("Https server listening on port " + 9998);
});
