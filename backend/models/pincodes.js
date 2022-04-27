const mongoose = require("mongoose")

const PinSchema = new mongoose.Schema({
    pincode:{
        type:Number,
        required:true,
    },
    zone:{
        type:String,
        required:true
    }
});

const PinModel = mongoose.model("pincodes",PinSchema)
module.exports = PinModel;