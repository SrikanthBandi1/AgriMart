import Layout from "./Layout";
import { Form, Button } from "react-bootstrap";
import React, { useState } from "react";

function Becomeaseller() {
  const [email, setEmail] = useState("");
  return (
    <Layout>
      <div className="signup become-bg">
        <div className="row">
          <div className="col-md-3">
            <div className="root">
              <h2 className="become-launch">
                Launch Your Business in 10 Minutes
              </h2>
              <Form>
                <Form.Control
                  type="email"
                  placeholder="Enter Your E-Mail Id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="formcontrol"
                />
                <Button variant="primary" type="submit" className="btn">
                  Start Selling
                </Button>
              </Form>
            </div>
          </div>
          <div className="col-md-3">
            <img src="/farmer.png" />
          </div>
          <div className="col-md-6">
            <div className="root">
              <h2 className="become-launch">
                Sell Online To 10Lakhs+ Customers
              </h2>
              <div className="flex">
                <div>
                  <img src="/truck.jpg" className="icon" />
                  <p>7 day Payment</p>
                </div>
                <div>
                  <img src="/truck.jpg" className="icon" />
                  <p>Pan India Delivery</p>
                </div>
                <div>
                  <img src="/truck.jpg" className="icon" />
                  <p>10000+ Sellers</p>
                </div>
                <div>
                  <img src="/truck.jpg" className="icon" />
                  <p>Account Management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Becomeaseller;
