import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Cart() {
  // const location = useLocation();
  // const cartItems = location.state;
  // console.log(cartItems, "cartItems")
  // const [increment, setIncrement] = useState(cartItems.discountd_price)
  // const [shipping, setShipping] = useState(30)
  const Email=localStorage.getItem("email")
  const Password=localStorage.getItem("password")
  // const navigate=useNavigate()
  console.log(Email,Password,"datas")


  if(Email&&Password){

  
    axios.get("http://192.168.5.35:8000/addtocart/", {
      headers: {
        'Authorization': 'Basic ' + btoa(Email + ':' + Password)
      }
    }).then((res) => console.log(res.data.product,"iam product id"))

  }
  // const handleDecrement = () => {

  //   if (increment > cartItems.discountd_price) {
  //     setIncrement(increment - cartItems.discountd_price);
  //   }
  // }
  // const handleIncrement = () => {
  //   setIncrement(increment + cartItems.discountd_price)

  // }
  // const placeOrder=()=>{
  //   navigate('/ordersummary',{state:cartItems})
  // }
  return (
    // <Layout>
    //   <div>
    //     <h1 style={{
    //       color: " var(--unnamed-color-228e38)",
    //       textAlign: "center",
    //       font: "normal normal bold 24px/35px Poppins",
    //       letterSpacing: " 0px",
    //       color: " #228E38",
    //       marginTop: "100px",
    //       marginLeft: "-1090px",
    //       opacity: 1
    //     }}>Shopping Cart</h1>
    //   </div>
    //   <div className="row">
    //     <div className="col-4" >
    //       <img src={cartItems.product_image} style={{ height: "60%", width: "60%", marginLeft: "50px", marginTop: "50px" }} />
    //     </div>
    //     <div className="col-4" >
    //       <h4 style={{
    //         marginLeft: "30px",
    //         font: "normal normal bold 24px/35px Poppins",
    //         letterSpacing: "0px",
    //         color: "#FF0000",
    //         opacity: 1
    //       }}>{cartItems.title}</h4>
    //       <p style={{ marginLeft: "35px" }}>{cartItems.description}</p>
    //       <div style={{ marginLeft: "35px" }}>
    //         Amount: RS.{cartItems.discountd_price}.00
    //       </div>
    //       <div style={{ marginLeft: "30px" }}>
    //         Quantity:  <button type="button" class="btn btn-default border" onClick={() => handleDecrement()} > - </button> <button type="button" class="btn btn-default border">  </button> <button type="button" class="btn btn-default border" onClick={() => handleIncrement()} > + </button> </div>
    //       <div className='flex' style={{ marginTop: "30px", marginLeft: "20px" }}>
    //         <div><button style={{
    //           color: "var(--unnamed-color-000000)",
    //           textAlign: "center",
    //           font: "normal normal normal 20px/30px Poppins",
    //           letterSpacing: "0px",
    //           color: " #000000",
    //           backgroundColor: "#74E926",
    //           opacity: 1,
    //           height: "40px",
    //           width: "120px",
    //           border: "0"
    //         }} >Add Item</button></div>

    //         <div><button style={{
    //           color: "var(--unnamed-color-000000)",
    //           textAlign: "center",
    //           font: "normal normal normal 20px/30px Poppins",
    //           letterSpacing: "0px",
    //           color: " #000000",
    //           backgroundColor: "#FF0000",
    //           opacity: 1,
    //           height: "40px",
    //           width: "120px",
    //           border: "0"
    //         }}>Delete Item</button></div>
    //       </div>

    //     </div>


    //     <div className="col-4" >
    //       <div class="card" style={{ width: "380px", height: "350px" }}>
    //         <div class="card-body">
    //           <h5 style={{
    //             color: "var(--unnamed-color-000000)",
    //             textAlign: "center",
    //             font: " normal normal bold 24px/35px Poppins",
    //             letterSpacing: "0px",
    //             color: "#000000",
    //             opacity: 1
    //           }}>The Total Amount Of</h5>
    //           <div className='flex' style={{ marginTop: "30px", marginLeft: "2px" }}>
    //             <div><h4 style={{ color: "black", marginLeft: "50px" }}>Ammount</h4></div>

    //             <div>
    //               <h4 style={{ color: "black" }}> Rs.{increment.toFixed(2)}</h4>
    //             </div>
    //           </div>
    //           <div className='flex' style={{ marginTop: "10px", marginLeft: "2px" }}>
    //             <div><h4 style={{ color: "black", marginLeft: "50px" }}>Shipping</h4></div>

    //             <div>
    //               <h4 style={{ color: "black" }}> Rs.30.00</h4>
    //             </div>
    //           </div>
    //           <hr></hr>
    //           <div className='flex' style={{ marginTop: "10px", marginLeft: "2px" }}>
    //             <div><h4 style={{ color: "black", marginLeft: "30px" }}>Total(including vat)</h4></div>

    //             <div>
    //               <h4 style={{ color: "black" }}> Rs.{increment + shipping}.00</h4>
    //             </div>
    //           </div>
    //           <button style={{ backgroundColor: "green", width: "50%", height: "15%", marginLeft: "80px", marginTop: "20px", color: "white", borderRadius: "8px", border: "0" }} onClick={placeOrder}>Place Order</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </Layout>
    <h1>hello</h1>
    
  )
}

export default Cart











