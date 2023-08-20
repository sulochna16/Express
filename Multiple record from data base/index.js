const express=require('express')
const app=express()
let cors=require('cors');
app.use(cors());
const {MongoClient}=require('mongodb')//by using this line we are access the mongodb libaray in our project 
async function getdata(x){
const password='abc123456789'//by using this we are connect with mongodb
const url=`mongodb+srv://bhujangsulochana:${password}@cluster0.jjltvwk.mongodb.net/?retryWrites=true&w=majority`
const client=new MongoClient(url)//this line indicate we are creating object of mongoclinet and connect the fuction 
client.connect()
const args={eid:x}
const result=await client.db("employee_db").collection("empdata").findOne(args)
if (result==null)
{
    client.close()
    return "Record not found"
}
else{
    console.log(result)
}
    client.close()
    return result;
}
async function getAllRecords (sal){
    const password='abc123456789'
const url=`mongodb+srv://bhujangsulochana:${password}@cluster0.jjltvwk.mongodb.net/?retryWrites=true&w=majority`
const client=new MongoClient(url)
client.connect()
const args={salary:{$gt:sal}}
const result= client.db("employee_db").collection("empdata").find(args)
const arr=await result.toArray()
if (arr==null)
{
    client.close()
    return "Record not found"
}
else{

    client.close()
    return arr;
}
}
app.get("/student/:id",async(req,res)=>{
    const sid=Number(req.params.id)
    const row=await getdata(sid)
    res.send(row)
})
app.get("/students/:sal", async (req, res) => {
    const sal = Number(req.params.sal);
    const rows= await getAllRecords(sal);
    res.send(rows);
  });
const PORT=3002
app.listen(PORT,()=>{
    console.log(`server running on port${PORT}`)
})