import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Dashboard = () => {
  const [success,setSuccess]=useState()
  const navigate=useNavigate()
  axios.defaults.withCredentials=true;
  useEffect(()=>{
    axios.get('http://localhost:3001/dashboard')
       
    .then( res =>{
      if(res.data==="Success"){
       setSuccess("OK")
      }
      else{
        navigate('/home')
      }
      
    })
    .catch(err=>console.log(err))
  })
  return (
    <div>
      <h1>Dasboard</h1>
      <p>{success}</p>
    </div>
  )
}

export default Dashboard