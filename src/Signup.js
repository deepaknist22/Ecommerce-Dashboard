import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {

    const [name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState(""); 
    const navigate = useNavigate();


    const collectData =async ()=>{
     let result = await fetch('http://localhost:4500/register',{
      method:'post',
      body: JSON.stringify({name,email,password}),
      headers :{
        'content-Type':'application/json'
      },
     });
     result = await result.json();
     console.log(result);
     localStorage.setItem('user',JSON.stringify(result))
     if(result){
     navigate('/')
     }
    }
  return (
    <>
    <h1>Register</h1>
    <div className='register'>
        
        <input type="text" className='inputBox' placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type = "email" className='inputBox' placeholder='Enter Your Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" className='inputBox' placeholder='Enter Password'value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className='button' onClick={collectData}>Sign UP</button>
    </div>
    </>
  )
}

export default Signup