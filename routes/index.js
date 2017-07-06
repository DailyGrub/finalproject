var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var assert = require('assert');

var url = 'mongodb://localhost:27017/users';


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Daily Grub' });
});

router.get('/get-data', function (req, res, next) {
  mongo.connect(url, function(err, db) {
    assert.equal(null, err);

  })

});



// router.get('/update', function (req, res, next) {
//
// })
//
// router.get('/delete', function (req, res, next) {
//
// })

/* GET sign up page. */
router.get('/enroll', function(req, res, next) {
  res.render('enroll', { title: 'DailyGrub.com:  Sign Up To Receive the Best in Local Meal Deals' });
});

/* GET admin page. */
router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'DailyGrub.com - Advertiser Login' });
});

/* GET coupon page. */
router.get('/coupon', function(req, res, next) {
  res.render('coupon', { title: 'DailyGrub.com -  Your Coupon' });
});

router.get('/coupons', function(req, res, next) {
  res.render('coupon', { title: 'DailyGrub.com -  Your Coupon' });
});


/* GET confirm  page. */
router.get('/confirm', function(req, res, next) {
  res.render('confirm', { title: 'DailyGrub.com - Thank You' });
});

/* GET vendor sign up  page. */
router.get('/vendor', function(req, res, next) {
  res.render('vendor', { title: 'DailyGrub.com - Vendor Sign Up' });
});

/* GET vendor sign up  page. */
router.get('/vendors', function(req, res, next) {
  res.render('vendor', { title: 'DailyGrub.com - Vendor Sign Up' });
});


module.exports = router;
