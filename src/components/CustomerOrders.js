import React, { useEffect } from 'react'
import Layout from './Layout'
import axios from 'axios'

function CustomerOrders() {
    useEffect(()=>{
        axios.get("http://192.168.5.35:8000/cus_orders/").then((resp)=>console.log(resp))
    })
  return (
    <Layout>
<div style={{marginTop:"80PX"}}>
      <h1>orders</h1>
      <div class="container">
  <div class="row">
    <div class="col-sm-12">
      <div class="card">
      
      </div>
    </div>

    <div class="col-sm-12 mt-5">
      <div class="card">
       hello
      </div>
    </div>
   
   
  </div>
</div>
    </div>
    </Layout>
    
  )
}

export default CustomerOrders
