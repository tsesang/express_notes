const express = require("express");
const app = express();
const fs = require("fs");
//---------------ROUTE HANDLER-------------------------
const all_routes = require("./things.js");
//y===router



//----------------MODIFY INCOMING RESPONSE------------------
app.use('/',(req,res,next)=>{
    console.log('this is first middleware it could modify req obj')
    // req.header['time']=Date.now();
    next();
})


//------------------ROUTER HANDLER-------------------
app.use("/", all_routes);
//in the browser localhost/3001/about



//--------------MODIFY RESPONSE -----------------------------------
app.use('/',(req,res,next)=>{
    console.log('this is LAST middleware it could modify req obj')
})




// app.use("/things", all_routes);
//in the browser localhost/3001/things/about



// const http = require('http')
// const server = http.createServer();
// server.listen()

// app.post('/',(req,res)=>{
//     res.send("i am post man .... ")
// })

app.listen(3001, () => {
  console.log("i am listening at port 3001 : ");
});



