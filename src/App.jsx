// import { useState } from 'react'
// import './App.css'

// export default function App() {
//   const [form,setForm]=useState({})
//   const handlechange=(e)=>{
//     // setForm({"hello howar us":"we are oj"})
//     setForm({
//       ...form,
//       // destrutring of the form 
//       [e.target.name]:e.target.value})
//     // console.log(form)
//     // console.log(e.target.value,e.target.type)
//   }
//   // to handle after submit button
//   const handlesumbit=(e)=>{
//     e.preventDefault();
//     console.log(form)
//     // console.log(form)
//     // console.log("username is :"+e.target[0].value)
//     // console.log("password is :"+e.target[1].value)
//   }
//   return (
// <div>
//   {/*to convert any object to string we use json.stringify  */}
//   {JSON.stringify(form)}
//     <form onSubmit={handlesumbit}>
//       <span>enter username</span>
//     <input type="text" name="username" onChange={handlechange}></input>
//        <span>enter password</span>
//     <input type="password" name="pswd" onChange={handlechange}></input>
//     <button type="submit" name="password"></button>
//     </form>
//    <h1>hello every on e</h1>
//   </div>
//   )
// }

import React from "react";
import {useState} from "react";
export default function App(){
// const [value,setValue]=useState("kishor") we need to chabnge the value 
const [value,setValue]=useState({})
  
  

const changeValue=(e)=>{
  
  setValue(
    {...value,[e.target.name]:e.target.value})
  console.log(e.target.name+":"+e.target.value)
}
const submiForm=(e)=>{
    e.preventDefault()
  console.log(e.target[0].name+":"+e.target[0].value +"and"+ e.target[1].name+":"+e.target[1].value)
  // console.log(e.target[1].name+":"+e.target[1].value)  
    setValue(e.target.value)
  }
  
  return(
  <div>
   <p> {JSON.stringify(value)}</p>
    <h1>new form to take input form the user and and passworld and show to i t</h1>
    <form onSubmit={submiForm}>
      <span>enter the username</span>
      <input type="text" name="username" onChange={changeValue}></input>
      <span>password</span>
      <input type="password" name="password" onChange={changeValue}></input>
      <input type="submit"></input>
    </form>
</div>
    
  )
}