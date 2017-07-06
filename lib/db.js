var mongodb = require('mongodb');
var mongoose = require("mongoose");
var assert = require("assert");


// try{
// console.log("An error");
// throw new Error("An Error");
// } catch(err) {
// console.log("Some Error", err);
// }


// Database configuration with mongoose
// mongoose.connect("mongodb://JeffKnowles:FIRG0616@ds145892.mlab.com:45892/dailygrub");
var db = undefined;

// Show any mongoose errors
// db.on("error", function(error) {
//   console.log("Mongoose Error: ", error);
// });

// Once logged in to the db through mongoose, log a success message
// db.once("open", function() {
//   console.log("Mongoose connection successful.");
// });

// Set mongoose to leverage built in JavaScript ES6 Promises
// mongoose.Promise = Promise;

/////////////////////////////////////////////////////////////////

//Database configuartion with mongodb

var MongoClient = require('mongodb').MongoClient;

var url ="mongodb://JeffKnowles:FIRG0616@ds145892.mlab.com:45892/dailygrub";
var connCount = 0;
// Use connect method to connect to the server
MongoClient.connect(url, function(err, dbconnection) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  if (!db) {
  db=dbconnection;
  db.collection("testconnection").updateOne(
    {_id:"lastconnected"},
    {$set: {onDate: Date.now()}},
    {upsert:true},
    function(err, res){
      // console.log("Upsert Test", err, res);
      db.collection("testconnection").find().limit(1).next(function(err, doc) {
        connCount += 1;
        console.log("Testing Database Connection" , doc, err, connCount);

      });
    }
  );
}

});



module.exports.createUser=function createUser(newUser, callback) {
  db.collection("users").insertOne(newUser, function(err, result) {
      assert.equal(null, err);
      console.log('User Inserted');
      callback (err, result.insertedCount=1);
});

};

module.exports.createVendor=function createVendor(newVendor, callback) {
  db.collection("vendors").insertOne(newVendor, function(err, result) {
      assert.equal(null, err);
      console.log('Vendor Inserted');
      callback (err, result.insertedCount=1);
});

};
