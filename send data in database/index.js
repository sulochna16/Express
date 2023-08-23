const express=require("express")
const app=express()
let cors=require('cors')
app.use(cors())
app.use(express.json())
const {MongoClient}=require('mongodb')
async function saveData(row){
    const password='abc123456789'
    const url=`mongodb+srv://bhujangsulochana:${password}@cluster0.jjltvwk.mongodb.net/?retryWrites=true&w=majority`
    const client=new MongoClient(url)
    client.connect()

    const result=client.db('employee_db').collection('empdata').insertOne(row)
    client.close()
}
app.post('/student',(req,res)=>{
    console.log("got data")
    const row=req.body
    console.log(row)
    saveData(row)
    res.send("record saved ")
})
const PORT=3010
app.listen(PORT,()=>{
    console.log('server running at 3010')
})