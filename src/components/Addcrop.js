import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Layout from "./Layout";
import { Link } from "react-router-dom";

function Addcrop() {
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
      <div className="" style={{marginTop:"110px"}}>
        <div className="ms-5 mt-0 " style={{marginTop:"150px", color:'green'}}>
          <h4>Add Crop</h4>
        </div>
        <div className=" row py-0  g-5 m-0" style={{marginLeft:"10px",marginTop:"5px"}}>
          <div className="col-lg-4">
            <label for="inputTypeTittle">Title</label>
            <div className="mb-0">
              <input
                type="text"
                className="form-control"
                placeholder="Name Of Product"
                // value={title}
                // onChange={}
                // onChange={(e) => {
                //   setTitle(e.target.value);
                // }}
                // required
                // autoComplete="off"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <label for="inputTypeDescription">Seling Price</label>
            <div className="mb-0">
              <input
                type="text"
                className="form-control"
                placeholder="Product Description"
                // value={description}
                // onChange={(e) => {
                //   setDescription(e.target.value);
                // }}
                // required
                // autoComplete="off"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <label for="inputTypeMarkedPrice">Discounted Price</label>
            <div className="mb-0">
              <input
                type="text"
                className="form-control"
                placeholder="MarkedPrice"
                // value={marked_price}
                // onChange={(e) => {
                //   setMarked_price(e.target.value);
                // }}
                // required
                // autoComplete="off"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <label for="inputTypeSellingPrice">Category</label>
            <div className="mb-0">
              <input
                type="text"
                className="form-control"
                placeholder="SellingPrice"
                // value={selling_price}
                // onChange={(e) => {
                //   setSelling_price(e.target.value);
                // }}
                // required
                // autoComplete="off"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <label for="inputTypeQuantity">Quantity</label>
            <div className="mb-0">
              <input
                type="number"
                className="form-control"
                placeholder="Quantity"
                // value={quantity}
                // onChange={(e) => {
                //   setQuantity(e.target.value)
                // }}
                // required
                // autoComplete="off"
              />
            </div>
          </div>
          <div className="col-lg-4  rigntbutton">
            <label for="inputTypeOfAddCategory">Description</label>
            <div className="mb-0">
              <input
                type="textarea"
                className="form-control"
                placeholder="Add a Category"
                // value={titles}
                // onChange={(e) => {
                //   setTitles(e.target.value);
                // }}
                // required
                // autoComplete="off"
              />
            </div>
          </div>

          <div className="col-lg-4 rigntbutton ms-3 mb-0 ">
            <label for="inputTypeOfAddaStockItem ">Product Image</label>
            <br />
            <div
              className=" mt-6 col-6"
              style={{ height: "50px", width: "450px", display: "flex" }}
            >
              <img
                src="/sunshine.png"
                style={{ height: "150px", width: "150px" }}
              />{" "}
              <div className="mx-3 mt-5">
                <button
                  className="btn btn-default border-0 rounded-0 "
                  style={{
                    width: "140px",
                    backgroundColor: "#707070",
                    color: "white",
                    marginTop: "65px",
                  }}
                  type="button"
                >
                  Change Image
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-center">
          <button
            className="btn btn-success border-0 rounded-0 "
            style={{
              width: "140px",
              color: "white",
              marginTop: "65px",
            }}
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Addcrop;
