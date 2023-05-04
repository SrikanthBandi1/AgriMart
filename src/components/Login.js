import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";
import { useDispatch, useSelector } from "react-redux";
import { isUser } from "../actions/Action";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const verify = (e) => {
    e.preventDefault();
    let obj = {
      email: email,
      password: password,
      user_type: type,
    }

    axios
      .post("http://192.168.5.35:8000/userlogin/", obj)
      .then((res) => {
        // debugger;
        if (res.status === 200) {
          if (res.data.IsCustomer === true) {
            console.log(res.data.IsCustomer, "cus")
            dispatch(isUser(res.data.IsCustomer));
            toast.success("login successful")
          }
          else {
            dispatch(isUser(res.data.IsFarmer));
            toast.success("login successful")
            console.log(res.data.IsFarmer, "fav")
          }
        }
        else {
          toast.error("Invalid Credentials")
          alert("error")
        }

      });
  };
  return (
    <Layout>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="card" id="login">
            <div className="card-head"></div>

            <div className="card-body farmer-card-body mt-5">
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label">UserName</label>
                  <input
                    className="form-control"
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ borderColor: "rgb(120, 244, 100)" }}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label">Password</label>
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
              </div><br />
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
              </div><br />
              <div className="col-md-6 ">
                <div className="d-flex mx-5 mt-3">
                  <h4 className="fs-6 fw-bold" style={{ color: "green" }}>
                    Click to{" "}
                  </h4>
                  <a
                    className="mx-3 fw-bold"
                    href="/signup"
                    style={{ color: "black" }}
                    onClick={() => { navigate('/registration') }}
                  >
                    Create account
                  </a>
                </div><br />
                <div className="d-flex mx-5">
                  <a href="/forgotPassword">ForgotPassword?</a>
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
