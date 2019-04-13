const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const registerSchema = new Schema({
  name:{
    type:String,
    // required:[true,'can not be empty']
  },
  email:{
    type:String,
     // required:[true,'can not be empty']
  },
  contact:{
    type:Number,
     // required:[true,'can not be empty']
  },
  permanent_Address:{
    type:String,
     // required:[true,'can not be empty']
  },
  password:{
    type:Number,
    // required:[true,'can not be empty']
  }
})

const registerVendor = mongoose.model('registerVendor',registerSchema);

module.exports = registerVendor;
