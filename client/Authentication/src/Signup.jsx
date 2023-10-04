import { useState } from 'react'
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { Link , useNavigate} from 'react-router-dom'
const Signup = () => {
    const [name,setName]=useState()
    const [email,setEmail]=useState()
    const [password,setPassword]=useState()
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post(['http://localhost:3001'], {name,email,password})
        // eslint-disable-next-line no-unused-vars
        .then( res =>{
           navigate("/login")
        })
        .catch(err=>console.log(err))
    }
  return (
  <div className='d-flex justify-content-center align-items-center bg-success vh-100'>
  <div className='bg-white p-3 w-25 rounded'>
    <h2>Register</h2>
    <form onSubmit={handleSubmit}>
    <div className='mb-3'>
      <label htmlFor='email'>
         <strong>Name</strong>
      </label>
      <input type='text' placeholder='Enter Name' autoComplete='off' name='name' className='form-control rounded-0' onChange={(e)=>setName(e.target.value)}></input>
    </div>
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
       Register
    </button>
    
    </form>
    <p>Already Have an Account?</p>
    <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0'>
        Login
    </Link>
  </div>

  </div>
  )
}

export default Signup