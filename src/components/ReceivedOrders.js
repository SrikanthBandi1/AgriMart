import React from 'react'
import Layout from './Layout'

const ReceivedOrders = () => {
  return (
    <Layout>
    <div className='container' style={{marginTop:'100px'}}>
    <h2>ReceivedOrders</h2>
    <table className='table align-middle'>
      <thead>
        <tr>
            <th>Order No</th>
            <th>Customer Name</th>
            <th>Order Items</th>
            <th>Order Date</th>
            <th>Order Amount</th>
            <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td>1</td>
            <td>Rajitha</td>
            <td>
                Tomatos 10kg<br/>
                potatos 5kg <br/>
                Mango 10kg <br/>
            </td>
            <td>28-04-2023</td>
            <td>Rs 300.0</td>
            <td>Accepted</td>
        </tr>
      </tbody>
    </table>
    </div>
    </Layout>
  )
}

export default ReceivedOrders