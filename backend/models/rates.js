const mongoose = require("mongoose")

const RatesSchema = new mongoose.Schema({
    RateType:{
        type:String,
        required:true,
    },
    zone:{
        type:String,
        required:true,
    },
    FirstHalfKG:{
        type:Number,
        required:true,
    },
    AdditionalHalfKG:{
       type:Number,
       required:true,
    }
}) ;

const RateModel = mongoose.model("measures",RatesSchema)

module.exports = RateModel;