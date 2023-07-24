const express=require("express")
const app=express()

app.get("/",(req,res)=>{
  res.send("server is ready at ")
})

app.get("/a/:apple",(req,res)=>{
  res.send("server is ready at a which a is for apple "+req.params.apple)
})

app.listen(3000,()=>{
  console.log("server started")
})