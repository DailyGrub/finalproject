var dotenv = require('dotenv').config({path:__dirname+'/./../../.env'});


var twilio_sid = process.env.REACT_APP_TWILIO_SID;
var twilio_auth_token = process.env.REACT_APP_TWILIO_AUTH_TOKEN;
var twilio_phone_number = process.env.REACT_APP_TWILIO_PHONE_NUMBER;
var mobile_number = process.env.REACT_APP_MOBILE_NUMBER;

console.log(twilio_sid);
console.log(mobile_number);

var client = require('twilio')(
  twilio_sid, twilio_auth_token
);

client.messages.create({
  from: twilio_phone_number,
  to: mobile_number,
  body:  "Thank you for subscribing to the Daily Grub.  Daily meal deals, delivered directly to your mobile device."
}, function(err, message) {
  if(err) {
    console.error(err.message);
  }
});
