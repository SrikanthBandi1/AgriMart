import axios from "axios";
import React, { useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { iduser, isUser, mail, pwd, status, statuscode, userName } from "../actions/Action";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const[Id,setId]=useState()
  const navigation = useNavigate();
  const location = useLocation();
  const data = location.states
  console.log(data, "iam data")
console.log(Id,"IAM ID")
  const dispatch = useDispatch();
 

  const verify = (e) => {
    e.preventDefault();
    let obj = {
      email: email,
      password: password,
      user_type: type,
    }
   localStorage.setItem('email',email)
   localStorage.setItem('password',password)
    axios
      .post("http://192.168.5.35:8000/userlogin/", obj)
      .then((res) => {
        dispatch(userName(res.data.username))
        dispatch(iduser(res.data.userId))
        dispatch(status(res.data.status))
        if (res.status === 200) {
          console.log(data, "venkateshwarlu");
          if (data == null) {
            navigation('/')
          } else {
            // console.log("venkateshwarlu");
            navigation('/VegiesProduct', { state: data })
          }

          dispatch(statuscode(res.status))
          if (res.data.IsCustomer === true) {
            console.log(res.data.IsCustomer, "cus")
            dispatch(isUser(res.data.IsCustomer));

          }
          else {
            dispatch(isUser(res.data.IsFarmer));
            console.log(res.data.IsFarmer, "fav")
          }
        }

      });
    
  };    

  // useEffect(()=>{
  //   axios.get(`http://192.168.5.35:8000/productdetails/${Id}`).then((res)=>console.log(res,"iam product data"))
  // },[Id])


    return (
    <Layout>
      <div className="container" style={{ marginTop: "-150px" }}>
        <div className="d-flex justify-content-center">
          <div className="card" id="login">
            <div className="card-head"></div>

            <div className="card-body farmer-card-body mt-5">
              <div className="row">
                <div className="col-md-5" style={{ marginLeft: "49px" }}>
                  <label className="form-label" style={{ marginLeft: "-280px" }}>UserName</label>
                  <input
                    className="form-control"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ borderColor: "rgb(120, 244, 100)" }}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-md-5" style={{ marginLeft: "49px", marginTop: "30px" }}>
                  <label className="form-label" style={{ marginLeft: "-280px" }}>Password</label>
                  <input
                    className="form-control"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ borderColor: "rgb(120, 244, 100)" }}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 mt-5 d-flex mx-5">
                  <h5 className="fs-6 fw-bold">Select Type :</h5>
                  <input
                    className="mx-3"
                    type="radio"
                    value="farmer"
                    name="role"
                    onClick={(e) => setType(e.target.value)}
                  />{" "}
                  farmer
                  <input
                    className="mx-3"
                    type="radio"
                    value="customer"
                    name="role"
                    onClick={(e) => setType(e.target.value)}
                  />
                  customer
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 d-flex mx-5">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={(e) => verify(e)}
                    style={{ borderRadius: "10px", width: "130px" }}
                  >
                    Login
                  </button>
                </div>
              </div>
              <div className="col-md-6 ">
                <div className="d-flex mx-5 mt-3">
                  <h4 className="fs-6 fw-bold" style={{ color: "green" }}>
                    Click to{" "}
                  </h4>
                  <a
                    className="mx-3 fw-bold"
                    href="/signup"
                    style={{ color: "black" }}
                  //    onClick={()=>{navigate('/signup')}}
                  >
                    Create account
                  </a>
                </div>
                <div className="d-flex mx-5">
                  <a href="/forgotpassword">ForgotPassword?</a>
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
