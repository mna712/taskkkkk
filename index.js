require("dotenv").config();
const express = require('express');
const app = express();
const routes = require('./routes/routes');
const mongoose = require("mongoose");
app.use(express.json());
const url = process.env.MONGO_URL;
app.use('/', routes);
mongoose.connect(url).then(() => {
  console.log("MongoDB server running......");
});

app.listen(process.env.port, () => {
    console.log("Server is running on port 3000");
});
