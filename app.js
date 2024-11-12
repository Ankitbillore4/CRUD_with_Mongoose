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

app.get("/create", async (req, res) => {
  let user = await userModel.create({
    name: "John Doe",
    email: "john@example.com",
    age: 25
  })
  res.send(user);
})


app.listen(3000,()=>{
    console.log('Server is running on port 3000');
 });
