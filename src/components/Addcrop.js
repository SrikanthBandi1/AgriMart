import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Layout from "./Layout";
import { Link } from "react-router-dom";
import "../Cssfiles/Addcrop.css";
import { useRef } from "react";
import axios from "axios";
function Addcrop() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [title, setTitle] = useState();
  const [selling_price, setSelling_price] = useState();
  const [discountd_price, setDiscountd_price] = useState();
  const [category, setCategory] = useState();
  const [quantity, setQuantity] = useState();
  const [description, setDescription] = useState();
  const [product_image, setProduct_image] = useState(null);
  const fileInputRef = useRef(null);
  const categories = ["V", "F"];
  const titleOptions = [
    "Apple",
    "Banana",
    "Black Berris",
    "Blue Berris",
    "Brinjal",
    "Bitter Gourd",
    "Capsicum",
    "Cabbage",
    "Chilli",
    "Cherries",
    "Custard Apple",
    "cluster Beans",
    "Elephant Tusk Okra",
    "Flat Beans",
    "Ginger",
    "Grapes",
    "Guava",
    "malabar Cucumber",
    "Mango",
    "Onion",
    "Okra",
    "Orange",
    "Pine Apple",
    "Carrot",
    "Pear",
    "Plumps",
    "Papaya",
    "Pumpkins",
    "Pigeon Pea",
    "Potato",
    "Snake Cucumber",
    "Tarmeric",
    "Water Melon",
    "Water Spincah",
  ];
   const token=localStorage.getItem('token')
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      'X-CSRFToken': token,
      'Authorization': `Bearer ${token}`
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let obj = {
      title: title,
      selling_price: +selling_price,
      discountd_price: +discountd_price,
      category: category,
      quantity: +quantity,
      description: description,
      product_image: product_image,
    };
    console.log(token, "token");
    console.log(obj, "obj");

    const formData = new FormData();
    formData.append("title", title);
    formData.append("selling_price", selling_price);
    formData.append("discountd_price", discountd_price);
    formData.append("category", category);
    formData.append("quantity", quantity);
    formData.append("description", description);
    formData.append("product_image", product_image);
    console.log(formData, "formData");
    // debugger;
    axios
      .post("http://192.168.5.35:8000/addproducts/", formData,config)
      .then((res) => {
        console.log(res, "11111");
      });

      
  };

  const handleChangeImage = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProduct_image(reader.result);
      };
    } else {
      alert("Please select a valid image file.");
    }
  };

  return (
  
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
              <select
                className="form-select"
                aria-label="Title Select"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              >
                <option selected>Select a Title</option>
                {titleOptions.map((title) => (
                  <option value={title}>{title}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <label for="inputTypeDescription">Selling Price</label>
            <div className="mb-0">
              <input
                type="text"
                className="form-control"
                placeholder="Selling Price"
                inputmode="numeric"
                pattern="[0-9]*"
                value={selling_price}
                onChange={(e) => {
                  setSelling_price(e.target.value);
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
                inputmode="numeric"
                pattern="[0-9]*"
                placeholder="Discounted Price"
                value={discountd_price}
                onChange={(e) => {
                  setDiscountd_price(e.target.value);
                }}
                required
                autoComplete="off"
              />
            </div>
          </div>
          <div className="col-lg-4">
            <label for="inputTypeSellingPrice">Category</label>
            <div className="mb-0">
              {/* <input
                type="text"
                className="form-control"
                placeholder="Category"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
                required
                autoComplete="off"
              /> */}
              <select
                className="form-select"
                aria-label="Title Select"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                <option selected>Select a Category</option>
                {categories.map((category) => (
                  <option value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="col-lg-4">
            <label for="inputTypeQuantity">Quantity</label>
            <div className="mb-0">
              <input
                type="text"
                className="form-control"
                placeholder="Quantity"
                inputmode="numeric"
                pattern="[0-9]*"
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
                placeholder="Description"
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
              {product_image && (
                <img src={product_image} style={{ height: "150px", width: "150px" }} />
              )}{" "}
              <button
                className="btn btn-default border-0 rounded-0 "
                id="custom-btn"
                style={{
                  width: "140px",
                  backgroundColor: "#707070",
                  color: "white",
                  marginTop: "65px",
                  textAlign: "center",
                }}
                onClick={() => {
                  fileInputRef.current.click();
                }}
              >
                Add Image
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
  
  );
}

export default Addcrop;
