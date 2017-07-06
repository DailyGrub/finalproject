
// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// make UserSchema a Schema
var UserSchema = new Schema({
  // userfirstname: just a string
  userfirstname: {
    type: String
  },
  // userlastname: just a string
  userlastname: {
    type: String
  },
  // userzipcode: just a string
  userzipcode: {
    type: String
  },
  // usermobile: just a string
  usermobile: {
    type: String
  },
  // useremail: just a string
  useremail: {
    type: String,
    match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
  },
  // usercreated: the current date
  usercreated: {
    type: Date,
    default: Date.now
  }
});

// Create the User model with the UserSchema
var User = mongoose.model("User", UserSchema);

// Export the model so we can use it on our server file.
module.exports = User;
