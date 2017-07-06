// Require mongoose
var mongoose = require("mongoose");

// Create a Schema class with mongoose
var Schema = mongoose.Schema;

// Make LibrarySchema a Schema
var VendorSchema = new Schema({
    // vendorname: just a string
    vendorname: {
      type: String
    },
    // vendorcontact: just a string
    vendorcontact: {
      type: String
    },
    // vendorcontactphone: just a string
    vendorcontactphone: {
      type: String
    },
    // vendorcontactemail: just a string
    vendorcontactemail: {
      type: String,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    // vendoraddress: just a string
    vendorstreetaddress: {
      type: String
    },
    // vendorcity: just a string
    vendorcity: {
      type: String
    },
    // vendorstate: just a string
    vendorstate: {
      type: String
    },
    // vendorzipcode: just a string
    vendorzipcode: {
      type: String
    },
    // vendorcreated: the current date
    vendorcreated: {
      type: Date,
      default: Date.now
    }
  });

// Save the Library model using the LibrarySchema
var Vendor = mongoose.model("Vendor", VendorSchema);

// Export the Library model
module.exports = Vendor;
