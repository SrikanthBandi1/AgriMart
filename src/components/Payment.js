import React from 'react'

import { useNavigate } from 'react-router-dom'
import Layout from './Layout'
const Payment = () => {
  const navigate = useNavigate()
    const handlePayment = ()=>{
        navigate('/order')
    }
  return (
    <Layout>
    <div className='container' style={{marginTop:"30px"}}>
      <div className='row'>
        <div className='col-md-4'>
          <h3 style={{ color: "green" }}>Payment Module</h3>
        </div>

      </div>
      <div className='row'>
        <div className='col-md-3'></div>
        <div className='col-md-6'>
        <div className=" d-flex justify-content-center">
            <div>
              <h5>Name</h5>
            </div> 
            <div className='' style={{marginLeft:"30px"}}>
              <h5>VinayKumar</h5>
            </div>
             </div>
          <div className=" mt-3 d-flex justify-content-center">
            <div className="">
              <h5>Amount</h5>
            </div>
            <div  style={{marginLeft:"30px"}}>
              <h5>Rs.55.50</h5>
            </div>
             </div>
          <div className='text-center'>
            <button className='btn btn-success btn-lg' onClick={handlePayment} style={{width:'80px'}}>Pay</button>
            </div>
        </div>
       
        <div style={{height:"15vh"}}>
        </div>
        <hr></hr>
        <div className='row'>
         <img src='/Group 27.png' className='image-fluid' style={{width:'630px'}} ></img><br/>
         <p>Terms and Conditions : Return policy is not applicable for our application.If you find any unnecessary <br/>
          product please complaint us we will take neccessary steps for that.And try to refound your money.
         </p>
        </div>
      </div>
    </div>
    </Layout>
  )
}

export default Payment