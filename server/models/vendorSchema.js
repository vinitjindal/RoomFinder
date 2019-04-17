const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const VendorSchema = new Schema({
      key:{ type:String },

      address:{
        type:String,
         required:[true,'can not be empty'],
      },
      state:{
        type:String,
        required:[true,'can not be empty'],

      },
      city:{
        type:String,
        required:[true,'can not be empty'],

      },
      description:{
        type:String,
        required:[true,'can not be empty'],
      },
      contact:{
        type:Number,
        required:[true,'can not be empty'],

      },
      price:{
        type:Number,
        required:[true,'can not be empty']
      },


});

const vendor = mongoose.model('vendors',VendorSchema);

module.exports = vendor;
