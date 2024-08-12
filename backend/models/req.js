const mongoose = require('mongoose')

const ReqSchema = new mongoose.Schema({
    name: String,
    age: String,
    phone: String,
    email:String,

    blood: String
})

const ReqModel = mongoose.model("request", ReqSchema)
module.exports = ReqModel