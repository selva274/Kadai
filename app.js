const express=require('express');

const app=express();
const admin=express();

admin.get('/',(req,res)=>{
    res.send('Admin Home Page')
})

app.set('title','mysite')
app.get('title')

app.use('/admin',admin)

app.listen(3000,()=>{
    console.log("App connected..");
})