const registerVendor = require('../models/registerVendor');
const vendor = require('../models/vendorSchema');
const OTPSchema = require('../models/OTP');
const jwt = require('jsonwebtoken');
const express = require('express');
const withAuth = require('./middleware');
const nodemailer = require('nodemailer');


const secret = "sorryitsprivate";
const router = express.Router();


router.get('/getAllPgList',function(req,res,next){

})


router.post('/sendOTP',function(req, res, next){
  
  registerVendor.findOne({email : req.body.email}).then((data)=>{
    if(data)
    {
      var generatedOTP = "";
      for(i = 0; i < 4 ;i++)
      {
        generatedOTP = generatedOTP + String(Math.floor(Math.random() * 10));
      }      
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user:  'help.newbies471@gmail.com',
          pass: 'help.Newbies@123'
        }
      });
      const email = data.email;
      const OTPTime = Date.now();
      const time = String(OTPTime/1000);
      const otp = new OTPSchema({ generatedOTP, time, email });
      otp.save().then((res)=>{

        //console.log('succesfully saved ! '+ res);
      })

      var mailOptions = {
        from: 'help.newbies471@gmail.com',
        to: email,
        subject: 'Your password resetting OTP',
        text: 'Your one time password is ' +  generatedOTP  +'. valid for only 1 minute. '
      };
    
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      res.status(200).send("email sent succesfully !");
    }else{
      res.status(201).send('email not found !');
    }
  }).catch((err)=>{
    console.log(err);
  })
})


router.post('/handleOTP', function(req, res, next){
    OTPSchema.findOne({generatedOTP : req.body.otp}).then((data)=>{
      if(data){
        var currentTime = Date.now()/1000;
        var time = data.time;
        if((currentTime - time ) > 60)
        {
          res.send("time expires for OTP");
        }else{
          const email = data.email;
          registerVendor.findOneAndUpdate({ email:email},{$set:{password : req.body.pass}})
          .then((data)=>{
            res.status(200).send("password is set succesfully !");
          })
        }
        OTPSchema.deleteOne({generatedOTP : req.body.otp}).then((res) =>{
            console.log("succesfully deleted ! ");
            console.log(res);
        })
      }else{
        res.send("OTP is not correct !");
      }
    })
})

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
  registerVendor.findOne({ email: req.body.username ,password:req.body.password}).then((data)=>{
         if(!data){
           res.status(201).send("incorrect email or password");
        }else{
          jwt.sign({ id:data.id },secret,{ expiresIn:"3h" },(err,token)=>{
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
  console.log('data is send to client !');
})

router.post('/pglist',(req,res,next)=>{
  vendor.find( {key:req.body.Key} ).then((data)=>{
     if(!data.length){
      console.log("not found");
      res.status(400);
      res.send("Not Uploaded Yet");//.sendStatus(404);
    }else{
      console.log("found");
      res.status(200).send(data);
    }
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
  console.log('header is ' + req.body);
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
