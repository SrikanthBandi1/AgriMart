import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Layout from "./Layout";
import { Link } from "react-router-dom";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const[firstName,setFirstName]=useState("")
  const[lastName,setLastname]=useState("")
  const[address,setAddress]=useState("")
  const[phoneNum,setPhonenum]=useState("")
  const[type,setType]=useState()
  const[address1,setAddress1]=useState("")


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Username: ${username}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword},
      FirstName:${firstName},lastName:${lastName},address:${address},phoneNum:${phoneNum},type:${type},address1:${address1}`
    );
  };

  return (
    <Layout>
      <div className="container">
        <Form onSubmit={handleSubmit} className="signup">
          <h1 className="head"> Registration</h1>
          <div className="row">
            <div className="col-md-6">
              <Form.Group controlId="formBasicUsername" className="mb-4">
                <Form.Label className="label">Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="formcontrol"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formBasicEmail" className="mb-4">
                <Form.Label className="label">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="formcontrol"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              {" "}
              <Form.Group controlId="formBasicPassword" className="mb-4">
                <Form.Label className="label">First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="formcontrol"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formBasicConfirmPassword" className="mb-4">
                <Form.Label className="label"> Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="formcontrol"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formBasicConfirmPassword" className="mb-4">
                <Form.Label className="label"> LastName</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastname(e.target.value)}
                  className="formcontrol"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formBasicConfirmPassword" className="mb-4">
                <Form.Label className="label"> Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="formcontrol"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formBasicConfirmPassword" className="mb-4">
                <Form.Label className="label"> Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="formcontrol"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formBasicConfirmPassword" className="mb-4">
                <Form.Label className="label"> Address1</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Address1"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                  className="formcontrol"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formBasicConfirmPassword" className="mb-4">
                <Form.Label className="label">Phone No</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Phone number"
                  value={phoneNum}
                  onChange={(e) => setPhonenum(e.target.value)}
                  className="formcontrol"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
            <div className='mt-5'>
                                Select Type :  &emsp;
                                <input type="radio"  name="role" value="farmer" onChange={(e)=>setType(e.target.value)}/>&nbsp; farmer &emsp;
                                <input type="radio"  name="role"  value="customer" onChange={(e)=>setType(e.target.value)}/>&nbsp;customer
                            </div>
                            </div>
          </div>

          <Button variant="primary" type="submit">
            Submit
          </Button>
          <h3 className="sell">
            Sell Green{" "}
            <Link to="/login" className="link">
              Login now
            </Link>
          </h3>
        </Form>
      </div>
    </Layout>
  );
}

export default SignUp;
