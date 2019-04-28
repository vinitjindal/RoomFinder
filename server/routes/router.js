var registerVendor = require('../models/registerVendor');
var vendor = require('../models/vendorSchema');

const jwt = require('jsonwebtoken');
var express = require('express');
var router = express.Router();
const withAuth = require('./middleware')


const secret = "sorryitsprivate";



router.post('/home/register', function(req, res, next) {

  registerVendor.findOne({ password:req.body.password }).then((data)=>{
    if(!data){
      const { name,email,contact,permanent_Address,password } = req.body;
      const newUser = new registerVendor({ name,email,contact,permanent_Address,password  });

      newUser.save().then(user=>{
        jwt.sign(
          { id:user.id },
          secret,{ expiresIn:3600 },(err,token)=>{
            if (err) throw err;
            res.send("succesfully registered");
           }
        )
       });
    }if(data) res.send("Your Password is already taken !");
  })
    /*Vendor.create(req.body,(err,res)=>{
      res.send("succesfully connected")
    })*/
})

router.post('/home/login',(req,res,next)=>{
  //console.log(req.body);
  registerVendor.findOne({ email: req.body.username ,password:req.body.password}).then((data)=>{
         if(!data){
           res.status(401);
           res.send("incorrect email or password");
        }else{
          jwt.sign({ id:data.id },secret,{ expiresIn:3600 },(err,token)=>{
          if (err) throw err;
          res.status(200);
          res.send(token);
          });
        }
   })
})

router.post('/profile',withAuth,(req,res,next)=>{

  registerVendor.findOne({_id:req.user.id}).then((data)=>{
     res.json(data);
  })

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
     res.send("succesfully submitted !");
  }).catch((err)=>{
    if (err){
      console.log(err);
    }
  })
})

router.delete('/deletedata',(req,res)=>{
   vendor.deleteOne({_id:req.query.id}).then((data)=>{
    res.send("succesfully deleted");
   })
})

module.exports = router;
