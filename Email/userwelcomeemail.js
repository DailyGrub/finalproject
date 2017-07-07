
const env = require('env2')('../.env');
var helper = require('sendgrid').mail;
var sg = require('sendgrid')(process.env.REACT_APP_SENDGRID_API_KEY);

console.log(process.env.REACT_APP_SENDGRID_API_KEY);

var emailfunctions = {};

emailfunctions.userwelcome = function() {

var from_email = new helper.Email('welcome@dailygrub.com');
var to_email = new helper.Email('knowles.jeffrey@gmail.com');
var subject = 'Welcome to DailyGrub';
var content = new helper.Content('text/plain', 'Welcome to the Daily Grub.  Daily meal deals, delivered directly to your mobile device.  Specials are valid for one day only, and must be redeemed immediately.');
var mail = new helper.Mail(from_email, subject, to_email, content);

var request = sg.emptyRequest({
  method: 'POST',
  path: '/v3/mail/send',
  body: mail.toJSON(),
});

sg.API(request, function(err, response) {
  console.log(response.statusCode);
  console.log(response.body);
  console.log(response.headers);
});

};
