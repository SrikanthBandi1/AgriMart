import React from "react";
import "../Cssfiles/AddCropsLanding.css";
import { Card, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function AddCropsLanding() {
  const navigate=useNavigate()
  const handleEdit=()=>{
    navigate('/editcrop')
  }

  return (
    <div>
      <img
        src="/Group_61.png"
        className="  col-md-12 col-lg-12 col-sm-12   mt-5"
      />
      <div
        className="addCropButton"
        // style={{display:"flex",justifyContent:"center"}}
      >
        <button
          className="btn btn-success border-0 rounded-0 mt-4"
          style={{ width: "130px" }}
          type="button"
          onClick={()=>{navigate('/addcrop')}}
        >
          Add Crops
        </button>
      </div>
      <div className="container">
        <div className="row g-5 py-5">
          <div className=" col-lg-6 col-md-6 col-sm-12 col-xs-12 p-3">
            <div class=" card productCards border-0" style={{ width: "35rem" }}>
              <div class="card-body row ">
                <div className="col-5">
                  <img
                    className="card-img p-2 mt-5"
                    src="/farmer.png"
                    alt="Card image cap"
                    style={{ height: "180px", width: "250px" }}
                  />
                </div>
                <div className="col-7 col-7">
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <h5>Name of Crop: Mango</h5>
                    </li>
                    <li>Selling Price : 25.0</li>
                    <li>Discount :10.0</li>
                    <li>Category : Fruits</li>
                    <li>Date Of Added : March 1,2023, 12:05 pm</li>
                    <li>Quantity :10</li>
                    <li>Description :asakbdkasnlk</li>
                    <li style={{ display: "flex" }} className="mt-2">
                      <button
                        className="btn btn-default border-0 rounded-0 ms-auto"
                        style={{ width: "100px", marginRight: "5px", backgroundColor:"#B9F492"}}
                        type="button"
                        onClick={handleEdit}
                      >
                        Edit
                      </button>
                      
                      <button
                        className="btn btn-default border-0 rounded-0 "
                        style={{ width: "100px",backgroundColor:"#FF4040"}}
                        type="button"
                      >
                        Delete
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
 
        </div>
      </div>
    </div>
  );
}

export default AddCropsLanding;
