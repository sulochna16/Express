//Selecting single record for differnt method
const {MongoClient}=require('mongodb')//by using this line we are access the mongodb libaray in our project 
async function main(){
const password='abc123456789'//by using this we are connect with mongodb
const url=`mongodb+srv://bhujangsulochana:${password}@cluster0.jjltvwk.mongodb.net/?retryWrites=true&w=majority`
const client=new MongoClient(url)//this line indicate we are creating object of mongoclinet and connect the fuction 
client.connect()
const args={eid:200}
const result=await client.db("employee_db").collection("empdata").findOne(args)
//by using this line we are inert the record by calling insertOne method
//result.then((data)=>{//this line is say wait for the response from server and colse the connection
    if (result==null) 
    {
       console.log("Record not found") 
    } 
    else {
        console.log(result)
    }
    client.close()
    
}

main()