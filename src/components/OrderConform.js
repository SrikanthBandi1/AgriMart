import React from 'react'
import Layout from './Layout'
import { blue } from '@mui/material/colors'

const OrderConform = () => {
  return (
    <Layout>
    <div className='container'>
    <div className='d-flex justify-content-center' style={{marginBottom:"270px",marginTop:"50px"}}> 
   <div className='form'>
  <h2 style={{color:'green'}}>Your Order Placed Successfully</h2>
 
  <div className='mt-5'>
   <img src='/orderimage.png' style={{marginLeft:'130px'}}></img>
  </div>
  <div>
    <button className='btn btn-primary' style={{marginLeft:'160px'}}>TrackOrder</button>
  </div>
    </div>
    </div>
    </div>
    </Layout>
  )
}

export default OrderConform