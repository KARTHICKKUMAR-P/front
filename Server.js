const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './View');
app.get('/', (req, res)=>{
    //console.log("hello world");
    //res.status(500).send("error occurred");
    //res.status(200).send({error:"error message"});
    //res.json({express:"learning express"});
    res.send("hello world");
    //res.render("index");
}); 

//app.get('/user', (req, res)=>{
   // res.send("user information");
//})
//app.get('/user/newuser', (req, res)=>{
    //res.send("new user information");
//})
const userRouter = require('./Router/user');
app.use('/user', userRouter);

app.listen(3000);