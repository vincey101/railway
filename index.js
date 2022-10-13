const express = require('express');
const app = express();
const mongoose = require('mongoose');
require("dotenv").config();

//mongoose
// mongoose.connect(process.env.MONGODB, (err) => {
//     if (err) throw err;
//     console.log("Connected to Mongo");
// });

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes
app.get('/', (req, res) => {
    res.send("hello world");
});

//post routes
app.post('/signup', (req, res) => {
    res.send({ message: "this is the signup page!" });
});

app.post('/signin', (req, res) => {
    res.send({ message: "this is the signin page!" });
});


//server
app.listen(8080, () => {
    console.log('Server listening on port 8080');
});
