import React, { useState } from "react";
import "../Cssfiles/SearchResult.css";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from './Layout'
import { Col ,Row} from "react-bootstrap";

function SearchResult() {
  const location = useLocation();
const navigate=useNavigate();
 const value=location.state
 
 
console.log("value",value);
const handleNavigate=(e)=>{
    console.log(e,"and")

   if(e.category==='F'){
    navigate('/FruitProduct',{state:e})
   }
   else{
    navigate('/VegiesProduct',{state:e})

   }
}
  return (
    <Layout>
    <div className="container mt-5">
      <h4 className="searchResult " style={{marginTop:"100px"}}>Search Result:</h4>
      <div className="container-fluid mt-5" style={{display:"flex",justifyContent:"space-between"}}>
        {value&&value.map((e, i) => (
          <Row xs={1} md={4} className="g-3" id="printrows">
          <Col xs={12} md={6} lg={3} >
            <div
              class="searchResultCard card border"
              style={{ width: "18rem" }}
              onClick={()=>handleNavigate(e)}
            >
              <div class="card-body">
                {/* <button> */}
                    <img
                  src={e.product_image}
                  style={{ height: "150px", width: "100%" }}
                  
                />
                {/* </button> */}
                
                <h5
                  class="card-title mt-2"
                  style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "red",
                  }}
                >
                  {e.title}
                </h5>
                <p
                  class="card-title"
                  style={{
                    textAlign: "center",
                    fontWeight: "bolder",
                    color: "black",
                  }}
                >
                  <i class="bi bi-currency-rupee"></i>{e.discountd_price}/Kg
                </p>
              </div>
            </div>
         </Col>
         </Row>
        ))}
        <div>
    {/* {
        !value?
        <h1>Item not found</h1>
        :null
    } */}
        </div>
      </div>
    </div>
    </Layout>
  );
}

export default SearchResult;
