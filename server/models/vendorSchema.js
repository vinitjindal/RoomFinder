const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VendorSchema = new Schema({
  name:{
    type:String,
    required:[true,'can not be empty'],
  },
  email:{

  },
  contact:{

  },
  permanent_Address:{

  },
  password:{
    type:String
  },
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

      },
      image:{
        data : Buffer
      }
    },
  ]
});

const Vendor = mongoose.model('vendor',VendorSchema);

module.exports = Vendor;
