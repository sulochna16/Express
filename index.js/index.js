const { request } = require('http')
//step to create server in node.js
//load http libray by using requrie function 
//load http 
http=require('http')
//call createServer function to  create for crateServer funtion we have to pass a function as parameter
//which handle request and response
const app=http.createServer((request,response)=>{
    console.log("got request from server ")
    response.end("hello from server ")
})
//start the server at specifed port by using listen funtion 
app.listen(3010)//it is defind to which port the open the our project which means in this expmple the progrm 
//are open at port number 3010
console.log("SERVER START3010")
//open command and issu follow command 
//****** node filename **** * */
// in this example the file name is index.js we have to use
//node index.js