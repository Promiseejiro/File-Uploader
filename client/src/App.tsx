import React from "react";
import "./App.css";
import Register from "./pages/register";
import axios from "axios"
function App() {
  
  const check=async()=>{
    try{
       axios.get("http://localhost:2000/auth/google");
    } catch(err){
      alert(err)
    }
  }
  return (
    <div
      className="App bg-[#f4f4f4]  h-screen w-full">
  <Register/>
  <a href="http://localhost:2000/auth/google" >Google</a>
  <a href="http://localhost:2000/auth/github" >Github</a>
  <a href="http://localhost:2000/auth/facebook" >Facebook</a>
  <a href="http://localhost:2000/auth/twitter" >Twitter</a>
    </div>
  );
}
export default App;
