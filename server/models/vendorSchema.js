const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VendorSchema = new Schema({
  pgList:[
    {
      Address:{
        type:String,
         required:[true,'can not be empty'],
      },
      description:{
        type:String,
        required:[true,'can not be empty'],
      },
      price:{
        type:String,
        required:[true,'can not be empty']
      },
      image:{
        data : Buffer
      }
    }
  ]
});

const Vendor = mongoose.model('vendor',VendorSchema);

module.exports = Vendor;
