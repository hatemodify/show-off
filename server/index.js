const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const http = require('http');
const methodOverride = require('method-override');
const axios = require('axios');

const app = express();

const uri =
	'mongodb+srv://admin:asdasd12@cluster0.cqy2u.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
	.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Successfully connected to mongodb'))
	.catch((e) => console.error(e));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(morgan('combined'));
app.use(
	bodyParser.json({
		limit: '50mb',
	})
);
app.use(cors());

app.use('/showoff', require('./router/showoff'));
app.use('/item', require('./router/item'));
app.use('/user', require('./router/user'));

http.createServer(app).listen(9998, function () {
	console.log('Https server listening on port ' + 9998);
});
