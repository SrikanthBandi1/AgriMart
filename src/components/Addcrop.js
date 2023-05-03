import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import "../Cssfiles/Addcrop.css";
import { useRef } from "react";
function Addcrop() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [title, setTitle] = useState();
  const [sellingPrice, setSellingPrice] = useState();
  const [discountedPrice, setDiscountedPrice] = useState();
  const [category, setCategory] = useState();
  const [quantity, setQuantity] = useState();
  const [description, setDescription] = useState();
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  const handleChangeImage = (e) => {
    console.log(e.target.files[0].name);
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    } else {
      alert("Please select a valid image file.");
    }
    // setImage(e.target.files[0]);
  };

  return (
    <Layout>
      <div className="" style={{ marginTop: "110px" }}>
        <div
          className="ms-5 mt-0 "
          style={{ marginTop: "150px", color: "green" }}
        >
          <h4>Add Crop</h4>
        </div>
        <div
          className=" row py-0  g-5 m-0"
          style={{ marginLeft: "10px", marginTop: "5px" }}
        >
          <div className="col-lg-4">
            <label for="inputTypeTittle">Title</label>
            <div className="mb-0">
              <input
                type="text"
                className="form-control"
                placeholder="Name Of Product"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                required
                autoComplete="off"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <label for="inputTypeDescription">Selling Price</label>
            <div className="mb-0">
              <input
                type="text"
                className="form-control"
                placeholder="Product Description"
                value={sellingPrice}
                onChange={(e) => {
                  setSellingPrice(e.target.value);
                }}
                required
                autoComplete="off"
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
                value={discountedPrice}
                onChange={(e) => {
                  setDiscountedPrice(e.target.value);
                }}
                required
                autoComplete="off"
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
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                required
                autoComplete="off"
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
                value={quantity}
                onChange={(e) => {
                  setQuantity(e.target.value);
                }}
                required
                autoComplete="off"
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
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                required
                autoComplete="off"
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
              {image && (
                <img src={image} style={{ height: "150px", width: "150px" }} />
              )}{" "}
              <button
                className="btn btn-default border-0 rounded-0 "
                id="custom-btn"
                style={{
                  width: "140px",
                  backgroundColor: "#707070",
                  color: "white",
                  marginTop: "65px",
                }}
                onClick={() => {
                  fileInputRef.current.click();
                }}
              >
                Change Image
              </button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept="image/*"
                onChange={handleChangeImage}
              />
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
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </Layout>
  );
}

export default Addcrop;
