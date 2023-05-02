import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Layout from "./Layout";

function Changepassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <Layout>
      <div>
        <Form className="signup changepassword">
          <div className="col-md-4">
            <Form.Group controlId="formBasicPassword" className="mb-4">
              <Form.Label className="label">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="enter old password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="formcontrol"
              />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group controlId="formBasicConfirmPassword" className="mb-4">
              <Form.Label className="label">New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="enter new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="formcontrol"
              />
            </Form.Group>
          </div>
          <div className="col-md-4">
            <Form.Group controlId="formBasicConfirmPassword" className="mb-4">
              <Form.Label className="label">Confirm New Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="formcontrol"
              />
            </Form.Group>
          </div>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Layout>
  );
}

export default Changepassword;
