//Selecting multiple records
const {MongoClient}=require('mongodb')//by using this line we are access the mongodb libaray in our project 
async function main(){
const password='abc123456789'//by using this we are connect with mongodb
const url=`mongodb+srv://bhujangsulochana:${password}@cluster0.jjltvwk.mongodb.net/?retryWrites=true&w=majority`
const client=new MongoClient(url)//this line indicate we are creating object of mongoclinet and connect the fuction 
client.connect()
const args={salary:{$gt:2000}}
const result=await client.db("employee_db").collection("empdata").find(args)
const arr=await result.toArray()
arr.forEach(
    (row)=>{
        console.log(row)
    }
)
    
    client.close()
    
}

main()