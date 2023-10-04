import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from 'axios'

function Login() {
    

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    axios.defaults.withCredentials=true;
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email,password})
       
        .then( res =>{
          if(res.data.Status==="Success"){
            if(res.data.role==="admin"){
           navigate("/dashboard")   
            }
            else{
              navigate("/home")
            }
          }
          
        })
        .catch(err=>console.log(err))
    }

  return (
    <div className='d-flex justify-content-center align-items-center bg-success vh-100'>
    <div className='bg-white p-3 w-25 rounded'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
     
      <div className='mb-3'>
        <label htmlFor='email'>
           <strong>Email</strong>
        </label>
        <input type='email' placeholder='Enter Email' autoComplete='off' name='email'  className='form-control rounded-0' onChange={(e)=>setEmail(e.target.value)} ></input>
      </div>
      <div className='mb-3'>
        <label htmlFor='password'>
           <strong>password</strong>
        </label>
        <input type='password' placeholder='Enter Password' autoComplete='off' name='password'  className='form-control rounded-0' onChange={(e)=>setPassword(e.target.value)} ></input>
      </div>
      <button type='submit' className='btn btn-success w-100 rounded-0'>
         Login
      </button>
      
      </form>
     
    </div>
  
    </div>
  )
}

export default Login