const express = require('express'); //backend
const cors = require('cors'); // Allows access to permitted origins
const bodyParser = require('body-parser'); // parse the request
const connectDB = require('./db/connect'); // database connection

const app = express();
app.use(cors()); // allows for all origins
app.use(bodyParser.json({ limit: '30mb', extended: true })) // parses the incoming request data into json into request.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // accesses html, css, images from pubic folder

const PORT = 2020

url = 'mongodb+srv://testing:test123@cluster0.eboi2ye.mongodb.net/' // temp db link

const start = async () => {
    try {
        await connectDB(url);
        console.log('Connected to the database');
        app.listen(PORT, console.log(`Server is running on port ${PORT}`));
    }

    catch (error) {
        console.log(error);
    }   
}

start();