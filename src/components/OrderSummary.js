import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Layout from './Layout';

function OrderSummary() {
    const location = useLocation();
    const ordersummary = location.state;
    const navigate=useNavigate()
    const handleAddress=()=>{
navigate('/addaddress')
    }
    return (
        <Layout>
            <div style={{ marginTop: "90px" }}>
                <h6 style={{
                    color: " var(--unnamed-color-228e38)",
                    marginLeft: "50px",
                    font: "normal normal bold 24px/35px Poppins",
                    letterSpacing: "0px",
                    color: "#228E38",
                    opacity: 1
                }}>Order Summary</h6>
                <div className="row">
                    <div className='col-8'>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>{ordersummary.title}</td>
                                    <td>{ordersummary.quantity
                                    }</td>
                                    <td>{ordersummary.discountd_price
                                    }</td>
                                    <td>{ordersummary.discountd_price}</td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="col-4">
                        <div class="card" style={{ width: "70%", height: "100%",borderRadius:"18px" }}>
                            <div class="card-body">
                                <h6 style={{
                                    color: "var(--unnamed-color-000000)",
                                    textAlign: "center",
                                    font: "normal normal bold 24px/35px Poppins",
                                    letterSpacing: "0px",
                                    color: "#000000",
                                    opacity: 1
                                }}>Shipping Addess</h6>
                                <div  style={{marginLeft:"50px"}}>
                                   
                                    <input type="radio" value="farmer" name="role" />&nbsp;Address &emsp;<br></br>
                                    <input type="radio" value="customer" name="role"  style={{marginTop:"20px"}}/>&nbsp;Address1
                                </div>
                                <button style={{textAlign: "center",
font: "normal normal 600 20px/30px Poppins",
letterSpacing: "0px",
color:" #FFFFFF",
backgroundColor:"#228E38",
border:"0",
opacity: 1,
marginTop:"20px",marginLeft:"50px"}} onClick={handleAddress}>+Add Address</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8"></div>

                </div>

            </div>
        </Layout>
    )
}

export default OrderSummary
