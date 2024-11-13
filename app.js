const express = require('express');
const app = express();
const connectToDatabase = require('./config file/db.config');
connectToDatabase()
const userModel =require("./models/user.models")

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});


app.get("/read", async (req, res) => {
    let users = await userModel.find();
   res.render("read", {users});
})

app.post("/create",async (req,res)=>{
  let {name,email,age,imageUrl} = req.body;
let CreatedUser =  await userModel.create({
    name,
    email,
    age,
    imageUrl
})
console.log("created user");

res.redirect("/read");
})

app.get("/delete/:id", async (req, res) => {
let users = await userModel.findOneAndDelete({_id:req.params.id})
res.redirect("/read");
})


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
 });
