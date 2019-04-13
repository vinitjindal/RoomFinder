var registerVendor = require('../models/registerVendor');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/home/register', function(req, res, next) {
    /*Vendor.create(req.body,(err,res)=>{
      res.send("succesfully connected")
    })*/
    // var newVendor = new Vendor(req.body);
    registerVendor.create(req.body).then((data) => {
      console.log(data);
      res.send("succesfully registered !");
    }).catch((err)=>{
      if (err){
        console.log(err);
      }
    })
    // newVendor.save().then(res.send("success in submit data"));
    // console.log(newVendor);
    // res.send(newVendor);

})

module.exports = router;
