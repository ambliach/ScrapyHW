var express = require("express");
var mongoose = require("mongoose");
var axios = require("axios");
var cheerio = require("cheerio");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI);

var PORT = process.env.PORT || 3000;

app.listen(PORT, function(){
    console.log("Running on port: " + PORT);
});