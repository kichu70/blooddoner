var mongoose = require('mongoose');
mongoose.connect("mongodb+srv://kiichu7034:123@bloodapp.yzhsk6n.mongodb.net/?retryWrites=true&w=majority&appName=bloodapp")
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err)
})
