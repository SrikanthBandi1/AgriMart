import React from "react";
import '../Cssfiles/FarmerNavBar.css'
import { useNavigate } from "react-router-dom";

function FarmerNavBar() {
  const navigate=useNavigate()
  const handleOrders=()=>{
    navigate('/recievedorder')
  }
  return (
    <div className="col-12">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#" style={{marginLeft:"25px"}}>
            <img src="/logo.png" style={{ width: "100%", height: "50px" }} />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 me-5">
              <li class="nav-item navElements ">
                <a class="nav-link  " aria-current="page" href="#">
                  Fee Structure
                </a>
              </li>
              <li class="nav-item navElements">
                <a class="nav-link " href="#" >
                  Services
                </a>
              </li>
              <li class="nav-item navElements">
                <a class="nav-link " href="#">
                  Resources
                </a>
              </li>
              <li class="nav-item navElements">
                <a class="nav-link " href="#">
                  FAQs
                </a>
              </li>
              <li class="nav-item" >
                <a class="nav-link profileName" style={{color:"#228E38",fontWeight:"bold"}} href="#">
                  Welcome Vinay
                </a>
              </li>
            </ul>
            <div class="ms-auto mb-2 " style={{ marginRight: "40px"}}>
              <button class="btn btn-success me-2" type="button" onClick={handleOrders}>
                Received Orders
              </button>
              <button class="btn btn-success me-2" type="button">
                All Orders
              </button>
              <button class="btn btn-success" type="button">
                Start Selling
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default FarmerNavBar;
