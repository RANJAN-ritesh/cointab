const express = require("express")
const router = express.Router();
const Rates = require("../models/rates");

router.get('/',async (req,res)=>{
    try {
        const data = await Rates.find();
        res.json(data)
    } catch (error) {
        res.json({message:error})
    }
});

module.exports = router;