const express = require("express");
const router = express.Router();
const path = require('path');


// NORMAL TEXT DATA---------------------------(build in middleware for parsing form data)
const bodyparser = require('body-parser')
router.use(bodyparser.json());
router.use(bodyparser.urlencoded({extended:false}))


//  THIS MODULE IS MULTIPART ----  FILE IS BEING UPLOADED  ----- (middleware)
// const multer = require('multer')
// const fileupload = multer();


//THSI WILL SHOW THE FORM FILE ON BROWSER----------------
router.get("/", (req, res,next) => {
  res.sendFile(path.join(__dirname,'/index.html'))
  next();
});


// router.get("/about/", (req, res) => {
//   res.send(`<h1>about route</h1>`);
// });
// router.get("/home/", (req, res) => {
//   res.send(`<h1>home route</h1>`);
// });
// router.get("/contact/", (req, res) => {
//   res.send(`<h1>contact route</h1>`);
// });
// router.get("/gallery/", (req, res) => {
//   res.send(`<h1>gallery route</h1>`);
// });



//when you will make any change,sever will be restarted and all the var will be empty
//res.send will only accepts string argument so typecaste to string before responding



//THIS WILL THE DATA COMING FROM THE BROWSER ---------------------------------

const data_arr=[];
var counter=1;
router.post('/create_user',(req,res)=>{
  //create user 
  //req.body
  data_arr.push(req.body);
  counter++;
  res.send("hello post ... ")
})

router.get('/show_user',(req,res)=>{
  console.log(data_arr)
  res.json(data_arr);
})

router.get('/show_single_user/:id',(req,res)=>{
  let key = parseInt(req.params.id);
  res.send(data_arr[key].firstname)
})

module.exports = router;
