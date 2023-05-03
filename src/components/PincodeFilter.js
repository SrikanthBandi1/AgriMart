import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PincodeFilter() {
    const[pinCode,setPincode]=useState()
    
    const navigate=useNavigate()

    const handleClick=()=>{
        axios.get(`http://192.168.5.35:8000/veglistbypin/${pinCode}`).then((resp)=>{
            if(resp.status===200){
                navigate('/PinResult',resp)
            }
        }
       
        
        )
        
    }
  return (
    <div>
      <input type="text" placeholder='Pincode' value={pinCode} onChange={(e)=>setPincode(e.target.value)} onClick={handleClick}></input>
    </div>
   
  )
}

export default PincodeFilter
