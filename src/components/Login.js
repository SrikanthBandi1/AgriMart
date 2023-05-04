import axios from "axios";
import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";


function Login() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState("")
    const navigate = useNavigate();
    const verify = (e) => {
        e.preventDefault()
        axios.post("http://192.168.5.35:8000/userlogin/", {
            "email": email,
            "password": password,
            "user_type": type
        }
        )
            .then((res) => console.log(res.data))
        // if(uname==="rajitha" && password==="1234"){
        //     alert("login successfull");
        //     navigate("/")
        // console.log(email, password, type);


    }
    return (
        <Layout>

        <div className='container' >
     
            <div className="d-flex justify-content-center">

                <div className='card' id="login" >
                   
                    <div className='card-head'>
                       
                      
                    </div>

                    <div className='card-body farmer-card-body mt-5'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label className='form-label'>UserName</label>
                                <input className='form-control' type='text' onChange={(e) => setEmail(e.target.value)} style={{ borderColor: 'rgb(120, 244, 100)' }}></input>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label className='form-label'>Password</label>
                                <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} style={{ borderColor: 'rgb(120, 244, 100)' }}></input>

                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6 mt-5 d-flex mx-5' >
                                <h5 className="fs-6 fw-bold">Select Type :</h5>
                                <input className="mx-3" type="radio" value="farmer" name="role" onClick={(e) => setType(e.target.value)} /> farmer 
                                <input className="mx-3" type="radio" value="customer" name="role" onClick={(e) => setType(e.target.value)} />customer
                            </div>
                        </div>
                        <div className='row'>
                            <div className="col-md-6 d-flex mx-5">
                                <button type='button' className='btn btn-primary' onClick={(e) => verify(e)} style={{ borderRadius: '10px', width: "130px" }}>Login</button>
                            </div>  
                        </div>
                        <div className="col-md-6 ">
                            <div className="d-flex mx-5 mt-3">
                               <h4 className="fs-6 fw-bold" style={{color:'green'}}>Click to </h4>
                               <a className="mx-3 fw-bold" href="/signup" style={{color:"black"}}
                            //    onClick={()=>{navigate('/signup')}}
                               >Create account</a>
                            </div>
                            <div className='d-flex mx-5'>
                                <a href='/forgotpassword'>ForgotPassword?</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        
        </div>
        </Layout>
    );
}

export default Login;
