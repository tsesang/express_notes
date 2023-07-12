const express = require('express')
const app = express();
const path = require('path')
const bodyparser = require('body-parser')
const cors = require('cors')

app.use(cors())

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'/index.html'))
})

const user_data=[];
let counter =0;

app.post('/add_user',(req,res)=>{
    user_data.push(req.body);
    res.send("user successfully added .... ")
})

app.get('/get_all_user',(req,res)=>{
    res.json(user_data);
})

app.get('/get_specific_user/:id',(req,res)=>{
    res.json(user_data[parseInt(req.params.id)])
})

app.get('/hello',(req,res)=>{
    res.send("hello route ... ")
})

// app.put('/update_user/:id',(req,res)=>{
//     let name = prompt("enter name : ");
//     let email = prompt("enter email : ");
//     let subject = prompt("enter subject : ");

//     const updated_user = {
//         name:name,
//         email:email,
//         subject:subject
//     }

//     user_data[parseInt(req.params.id)]=updated_user;
//     res.json(updated_user);
// })

app.delete('/delete_user/:id',(req,res)=>{
    console.log("inside delete method ... ")
    user_data.splice(parseInt(req.params.id),1);
    console.log('delete done .... ')
})

app.listen(3001,()=>{
    console.log('server started executing on port 3001');
})
