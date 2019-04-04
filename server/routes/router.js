var Vendor = require('../models/vendorSchema');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.put('/home/register', function(req, res, next) {
    /*Vendor.create(req.body,(err,res)=>{
      res.send("succesfully connected")
    })*/
    var newVendor = new Vendor(req.body);
    console.log(newVendor);
    res.send(newVendor);



});

module.exports = router;
