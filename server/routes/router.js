var registerVendor = require('../models/registerVendor');
var vendor = require('../models/vendorSchema');

const jwt = require('jsonwebtoken');
var express = require('express');
var router = express.Router();
const withAuth = require('../middleware')


const secret = "sorryitsprivate";

/* GET home page. */
router.post('/home/register', function(req, res, next) {
    /*Vendor.create(req.body,(err,res)=>{
      res.send("succesfully connected")
    })*/
    // var newVendor = new Vendor(req.body);
    registerVendor.create(req.body).then((data) => {
      //console.log(data);
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

router.post('/home/login',(req,res,next)=>{
  registerVendor.findOne({ email: req.body.username ,password:req.body.password  }).then((data)=>{
        if(!data){
          res.send("incorrect email or password");
        }else{
          //console.log(req.body.username,req.body.password);
          res.send("succesfully loged In!");
          //console.log(data.email);
          const payload = data.email;
          //console.log(payload);
          const token = jwt.sign(payload,secret);
          res.cookie('token',token,{ httpOnly:true }).sendStatus(200);
        }
  })
})

router.get('/profile',withAuth,(req,res,next)=>{
  console.log(req.body.username);
  /*registerVendor.findOne({email:req.body.username}).then((data)=>{
     res.send(data);
  })*/

})

router.post('/pglist',(req,res,next)=>{
  vendor.find( {key:req.body.Key} ).then((data)=>{
     res.send(data);
  })
})

router.put('/editprofile',(req,res,next)=>{
   registerVendor.findOneAndUpdate({_id:req.body.key},{ $set:{
    name:req.body.name, email:req.body.email, contact:req.body.contact,
    permanent_Address:req.body.address }
  }).then((data)=>{
      res.send("succesfully updated !")
  })
})

router.post('/uploadPgData',(req,res,next)=>{
  vendor.create(req.body).then((data) => {
    //console.log(data);
    res.send("succesfully registered !");
  }).catch((err)=>{
    if (err){
      console.log(err);
    }
  })
})

router.delete('/deletedata',(req,res)=>{
//  console.log(req.query.id);
  vendor.deleteOne({_id:req.query.id}).then((data)=>{
    res.send("succesfully deleted");
   })
})

module.exports = router;
