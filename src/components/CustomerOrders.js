import React, { useEffect } from 'react'
import Layout from './Layout'
import axios from 'axios'

function CustomerOrders() {
  useEffect(() => {
    axios.get("http://192.168.5.35:8000/cus_orders/").then((resp) => console.log(resp))
  })
  return (
    <Layout>
      <div style={{ marginTop: "80PX" }}>
        <h1>orders</h1>
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="card" style={{
                background: "#FFFFFF 0% 0% no-repeat padding-box",
                boxShadow: "0px 3px 6px #00000029",
                borderRadius: "21px",
                opacity: 1,
                border: "none"
              }}>
                <div className="d-flex">
                  <img src="22136-3-mango-fruit.png" style={{
                    marginTop: "20px",
                    marginLeft: "19px",
                    width: "172px",
                    height: "112px"
                  }} />
                  <div style={{
                    marginTop: "20px",
                    marginLeft: "200px",
                  }}>
                    <h6>product : Mango</h6>
                    <h6>Quantity:10</h6>
                    <h6>Price:80</h6>
                  </div>
                </div>

              </div>
            </div>




          </div>
        </div>
      </div>
    </Layout>

  )
}

export default CustomerOrders
