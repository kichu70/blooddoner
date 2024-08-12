const mongoose = require('mongoose')

const AddSchema = new mongoose.Schema({
    name: String,
    age: String,
    phone: String,
    email:String,

    blood: String
})

const AddModel = mongoose.model("adds", AddSchema)
module.exports = AddModel