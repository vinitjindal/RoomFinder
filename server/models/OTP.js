const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OTPSchema = new Schema({
    generatedOTP : {type : String},
    time : {type : String},
    email : {type : String}
})

const OTP = mongoose.model('OTP',OTPSchema);

module.exports = OTP;