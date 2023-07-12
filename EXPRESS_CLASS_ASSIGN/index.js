const express = require('express');
const app = express();
const routes = require('./things')


app.use('/',routes)

app.use('/',(req,res,next)=>{
    console.log(req.headers['user-agent'])
})










app.listen(3001)