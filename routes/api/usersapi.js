var express = require('express');
var router = express.Router();
var db = require("../../lib/db");

router.post('/', function (req, res) {
var adduser = {
  userfirstname: req.body.userfirstname,
  userlastname: req.body.userlastname,
  useremail: req.body.useremail,
  usermobile: req.body.usermobile,
  userzipcode: req.body.userzipcode,
  usercreated: Date.now
};

console.log(req.body);

db.createUser(adduser, function (err, useradded) {
  console.log("User Created:", useradded);
  res.redirect("/userconfirmation");
});

// mongo.connect(url, function(err, db) {
//   assert.equal(null, err);
//   db.collection(users).insertOne(item, function(err, result) {
//     assert.equal(null, error);
//     console.log('Item Inserted');
//     db.close();
//   });
// });

});

router.get('/', function (req, res){
  res.send("This is the user API").status(200);
});

module.exports = router;
