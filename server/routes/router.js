var registerVendor = require('../models/registerVendor');
var vendor = require('../models/vendorSchema');

const jwt = require('jsonwebtoken');
var express = require('express');
var router = express.Router();
const withAuth = require('./middleware')


const secret = "sorryitsprivate";



/* GET home page. */
router.post('/home/register', function(req, res, next) {

  const { name,email,contact,permanent_Address,password } = req.body;

    const newUser = new registerVendor({ name,email,contact,permanent_Address,password  });

    newUser.save().then(user=>{
      jwt.sign(
        { id:user.id },
        secret,{ expiresIn:3600 },(err,token)=>{
          if (err) throw err;
          res.send("succesfully registered");
          console.log(token);
        }
      )
      console.log(user.id);
    });

    /*Vendor.create(req.body,(err,res)=>{
      res.send("succesfully connected")
    })*/
    // var newVendor = new Vendor(req.body);
    /*registerVendor.create(req.body).then((data) => {
      //console.log(data);
      res.send("succesfully registered !");
    }).catch((err)=>{
      if (err){
        console.log(err);
      }
    })*/
    // newVendor.save().then(res.send("success in submit data"));
    // console.log(newVendor);
    // res.send(newVendor);

})

router.post('/home/login',(req,res,next)=>{
  registerVendor.findOne({ email: req.body.username ,password:req.body.password}).then((data)=>{
        if(!data) res.send("incorrect email or password");
          //console.log(req.body.username,req.body.password);
          // res.send("succesfully loged In!");
          //console.log(data.email);
          const payload = data.id;
          // console.log(payload);
          //res.json(payload);
           jwt.sign({ id:data.id },secret,{ expiresIn:3600 },(err,token)=>{
             if (err) throw err;
            // res.cookie("token",token);
             res.send(token);
             //res.sendStatus(200).send(token);
             //res.setHeader(200,{'content-type':'application/json'});
             // res.end(JSON.stringify(value));
             //res.json(token);
             //res.status(200),setHeader(token).send("hurrey !");
           });
  })
})

router.post('/profile',withAuth,(req,res,next)=>{
  //console.log(req);
  // res.send(req.cookies);
  // console.log(req.cookies.secret);
  //res.json(req.user.id);
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
