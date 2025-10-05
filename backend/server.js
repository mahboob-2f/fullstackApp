import express from 'express'

const app = express();

app.get('/',(req,res)=>{
    res.send("Server is Ready");
})

//   get some jokes

app.get('/jokes',(req,res)=>{
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


const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Serve at https://localhost:${port}`);
})