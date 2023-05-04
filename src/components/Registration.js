import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Layout from "./Layout";
import { Link } from "react-router-dom";

function Registration() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(
      `Username: ${username}, Email: ${email}, Password: ${password}, Confirm Password: ${confirmPassword}`
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="formcontrol"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              {" "}
              <Form.Group controlId="formBasicPassword" className="mb-4">
                <Form.Label className="label">Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="formcontrol"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formBasicConfirmPassword" className="mb-4">
                <Form.Label className="label">Password</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="formcontrol"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formBasicConfirmPassword" className="mb-4">
                <Form.Label className="label">Last name:</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="formcontrol"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formBasicConfirmPassword" className="mb-4">
                <Form.Label className="label">Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="formcontrol"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formBasicConfirmPassword" className="mb-4">
                <Form.Label className="label">Address:</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="formcontrol"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formBasicConfirmPassword" className="mb-4">
                <Form.Label className="label">Address1:</Form.Label>
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
                <Form.Label className="label">Phone No:</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="formcontrol"
                />
              </Form.Group>
            </div>
            <div className="col-md-6">
              <Form.Group controlId="formBasicConfirmPassword" className="mb-4">
                <Form.Label className="label">Pin code:</Form.Label>
                <Form.Control
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="formcontrol"
                />
              </Form.Group>
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

export default Registration;
