const express = require("express")
const router = express.Router();
const Pins = require("../models/pincodes");

router.get('/',async (req,res)=>{
    try {
        const data = await Pins.find();
        res.json(data)
    } catch (error) {
        res.json({message:error})
    }
});

module.exports = router;