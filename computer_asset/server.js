const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://root:sqltejas@cluster1.64r18.mongodb.net/Computer_Status")

app.use("/", require("./routes/compRoute"));

app.listen(3001, function() {
    console.log("express server is running on port 3001.");
})