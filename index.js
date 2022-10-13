const express = require('express');
const app = express();
const mongoose = require('mongoose');
const myRoutes = require('./routes')

require("dotenv").config();

//mongoose
mongoose.connect(process.env.MONGODB, (err) => {
    if (err) throw err;
    console.log("Connected to Mongo");
});

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use("/", myRoutes)

//server
app.listen(process.env.PORT || 8081, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
});
