

const mongoose = require("mongoose");

async function connectToDatabase(){
     mongoose.connect("mongodb://127.0.0.1:27017/practice").then(()=>{
         console.log("Connected to database :");
     })

}


module.exports = connectToDatabase