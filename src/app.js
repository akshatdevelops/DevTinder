const express=require("express")

const app=express()

app.use("/astra",(req,res)=>{
    res.send("Hello Astra!")
})
app.use("/test",(req,res)=>{
    res.send("Hello test!")
})

app.listen(3000,()=>{
    console.log("app is listening on 3000")
})