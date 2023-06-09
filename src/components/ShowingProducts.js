import React, { useEffect } from 'react'
import Layout from "./Layout";
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Card } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';

function ShowingProducts() {
    const value = useSelector((state) => state.check.code)

    const navigate=useNavigate()
    const location = useLocation();
    const dataReceived = location.state;
    console.log(dataReceived, "dataReceived")
    useEffect(()=>{
     axios.get(`http://192.168.5.35:8000/productdetails/${dataReceived.id}`).then((resp)=>console.log(resp,"iam resp"))
    },[])
    const handleCart=()=>{
        if(value===200){
            navigate('/Cart',{state:dataReceived})
        }
        else{
            navigate('/login', {state:dataReceived})
        
        }
      
       
    }
    const handleBuy=()=>{
        navigate('/Cart',{state:dataReceived})
    }
    return (
        <Layout>
            <div className="row">
                <div className="col-lg-6 col-md-6 col-6" >
                    <Card style={{
                        width: "564px",
                        height: "483px", marginTop: "120px",
                        marginLeft: "83px",
                        background: " transparent  0% 0% no-repeat padding-box",
                        borderColor: "white",
                        opacity: 1,

                    }}>
                        <Card.Body>
                            <img src={dataReceived.product_image} style={{
                                width: "90%", height: "50%", marginTop: "50px", marginLeft: "30px"

                            }} />
                        </Card.Body>

                    </Card>
                    <h1 style={{
                        color: "var(--unnamed-color-000000)",
                        textAlign: " center",
                        font: "normal normal medium 30px/46px Poppins",
                        letterSpacing: " 0px",
                        color: "#000000",
                        opacity: 1,
                        marginTop: "10px"
                    }}>{dataReceived.title}</h1>
                </div>
                <div className='col-lg-6 col-md-6 col-6'>
                    <h1 style={{ marginTop: "120px", marginLeft: "80px" }}> {dataReceived.description
                    }</h1>
                    <h1 style={{ marginTop: "25px", marginLeft: "80px" }}>Rs.{dataReceived.discountd_price
                    }/ - <s>Rs.{dataReceived.selling_price
                        }/ </s> </h1>
                    <div className='flex' style={{ marginTop: "30px", marginLeft: "78px" }}>
                        <div><button style={{
                            width: "150px",
                            height: "40px",
                            /* UI Properties */
                            textAlign: "center",
                            font: "normal normal 600 20px/30px Poppins",
                            letterSpacing: "0px",
                            color: "#FFFFFF",
                            backgroundColor: "green",
                            border: "0",

                            opacity: 1
                        }} onClick={handleCart}>Add to cart</button></div>

                        <div><button style={{
                            width: "150px",
                            height: "40px",
                            /* UI Properties */
                            textAlign: "center",
                            font: "normal normal 600 20px/30px Poppins",
                            letterSpacing: "0px",
                            color: "#FFFFFF",
                            backgroundColor: "red",
                            border: "0",
                            marginLeft: "30px",

                            opacity: 1
                        }} onClick={handleBuy}>Buy Now</button></div>
                    </div>

                    <h2 style={{
                        color: " var(--unnamed-color-000000)",
                        textAlign: "center",
                        font: " normal normal 600 20px/30px Poppins",
                        letterSpacing: "0px",
                        marginTop: "40px",
                        marginLeft: "-360px"
                    }}>Available Offers</h2>
                    <div style={{
                        color: "var(--unnamed-color-000000)",
                        textAlign: "left",
                        font: "normal normal normal 18px/27px Poppins",
                        letterSpacing: " 0px",
                        color: " #000000",
                        marginLeft: "90px",
                        opacity: 1
                    }}>

                        • Any Vegitables and Fruits 10 kg Delivery charge Free<br></br>
                        • Service within One Hour<br></br>
                        • Case on Delivery and Online Payment Available<br></br>
                        • Instant Pay Discount Available<br></br>
                        • Regular Customer No Delivery Charge<br></br>
                    </div>
                </div>

            </div>

<div >
    <h1 style={{color: "var(--unnamed-color-228e38)",
textAlign: "left",
font: "normal normal medium 36px/55px Poppins",
letterSpacing: "0px",
color: "#228E38",
marginTop:"30px",
marginLeft:"90px",
opacity: 1}}>Featured Products:</h1>

</div>

        </Layout>
    )
}

export default ShowingProducts
