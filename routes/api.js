var express = require('express');
var router = express.Router();

router.use("/users", require("./api/usersapi.js"));

router.use("/vendors", require("./api/vendorsapi.js"));


module.exports = router;
