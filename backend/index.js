const express = require("express")
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

// //Import Routes
const PincodeRoutes = require("./controllers/pincode")
app.use("/pincode",PincodeRoutes)

const RatesRoutes = require("./controllers/rates")
app.use("/rates",RatesRoutes)

//Connecting to Database
mongoose.connect("mongodb://127.0.0.1:27017/cointab?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false",
{useNewUrlParser:true}
,()=>{
    console.log("connected from database")
})

const port = process.env.PORT || 3001
//Listening to the Server
app.listen(port,()=>{
    console.log("connected to port 3001 !")
})
