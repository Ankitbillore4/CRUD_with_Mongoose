const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name:String,
    email:String,
    age:String,
    imageUrl:String,
})

module.exports = mongoose.model("user",userSchema)