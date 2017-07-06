
var sendgrid_api_key = process.env.REACT_APP_SENDGRID_API_KEY;

var sendgrid = require("sendgrid")(sendgrid_api_key);
var email = new sendgrid.Email();

email.addTo("knowles.jeffrey@gmail.com");
email.setFrom("you@youremail.com");
email.setSubject("Sending with SendGrid is Fun");
email.setHtml("and easy to do anywhere, even with Node.js");

sendgrid.send(email);
