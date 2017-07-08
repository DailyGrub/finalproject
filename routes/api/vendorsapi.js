var express = require('express');
var router = express.Router();
var db = require("../../lib/db");

router.post('/', function (req, res) {
var addvendor = {
  restaurantname: req.body.restaurantname,
  vendorfirstname: req.body.vendorfirstname,
  vendorlastname: req.body.vendorlastname,
  vendoremail: req.body.vendoremail,
  vendormobile: req.body.vendormobile,
  vendorzipcode: req.body.vendorzipcode,
  vendorcreated: Date.now
};

console.log(req.body);

db.createVendor(addvendor, function (err, vendoradded) {
  console.log("Vendor Created:", vendoradded);
  res.redirect("/vendorconfirm");
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
  res.send("This is the vendor API").status(200);
});

module.exports = router;
