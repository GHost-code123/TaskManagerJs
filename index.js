const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/task');

// ------ Mongodb connection ------ //

const mongodbURI = 'mongodb://localhost:27017/tasks'

mongoose.connect(mongodbURI);
const db = mongoose.connection;

db.on('error', (error) => {
    console.log(error)
});

db.once('connected', () => {
    console.log('Database Connected');
});

 
// ------ Set up Server ------ //

const port = 3000;
const app = express();

app.use(express.json());
app.use('/api', router);

app.listen(port, () => {
	console.log(`Server is listening on http://localhost:${port}`);
});
