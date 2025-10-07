import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app = express();

app.get('/',(req,res)=>{
    res.send("Server is Ready");
})

//   get some jokes

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:"A joke",
            content:"this is a joke"
        },
        {
            id:2,
            title:"another joke",
            content:" this is a another  joke"
        },
        {
            id:3,
            title:"third joke",
            content:" this is third joke"
        },
        {
            id:4,
            title:"fourth joke",
            content:"this is fourth joke"
        },
        {
            id:5,
            title:"fiveth joke",
            content:"this is fiveth joke"
        }
    ]
    res.send(jokes);
})

app.get("/ghost",(req,res)=>{
    res.send("<h2 style='background-color:red; text-align:center;'>welcome ghost </h2>" )
})


const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(process.env.PORT);
    console.log(`Serve at https://localhost:${port}`);
})