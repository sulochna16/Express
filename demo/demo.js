//Load express Library
const express=require('express')
// create object of express()
const app=express()
//create get function
app.get('/',(request,response)=>{
    response.send("Hello world")
})
app.get('/hello',(request,response)=>{
    response.send("Hello from server express")
})
app.listen(3010)
console.log("server started at 3010")