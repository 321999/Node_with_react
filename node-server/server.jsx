const express=require("express")
const app=express()

app.get("/",(req,res)=>{
  res.send("server is ready at 4000 ")
})

app.get("/a/:apple",(req,res)=>{
  res.send("server is ready at a which afor apple "+req.params.apple)
})

app.listen(4000,()=>{
  console.log("server stad")
})