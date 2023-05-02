import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Layout from "./Layout";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Home() {
  const [vegies, setVegies] = useState([])
  const [fruits, setFruits] = useState([])
  const navigate=useNavigate();
  let state;
  useEffect(() => {
    axios.get("http://192.168.5.35:8000/veglist/").then((resp) => setVegies(resp.data))
    axios.get("http://192.168.5.35:8000/frtlist/").then((resp) => setFruits(resp.data))
  }, [])
  const handleCard=(index)=>{
console.log(index,"index")
navigate('/VegiesProduct',{ state: index })
  }
  const handleFruitcard=(i)=>{
  navigate('/FruitProduct',{state:i})

  }
  return (
    <Layout>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/landingpage.png"
              alt="First slide"
            />
            <Carousel.Caption className="caption">
              <h3>
                Keep as near as ever you can to the first sources of supply{" "}
                <span>Fruits</span> and <span>Vegetables</span>
              </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/landingpage.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/landingpage.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className="container">
          <div className="heading">
            <h1>Vegetables</h1>
          </div>
          <div className="grid-4">
            <CardGroup>

              {vegies.map((e,i) => (
                <Row xs={1} md={4} className="g-3" id="printrows">
                  <Col xs={12} md={6} lg={3} >
                    <Card style={{
                      width: "250px",
                      height: "300px", display: "flex"
                    }} onClick={()=>handleCard(e,i)}>
                      <Card.Img variant="top" src={e.product_image
                      } style={{ width: "50%", height: "50%", marginTop: "21px", marginLeft: "78px" }} />
                      <Card.Body>
                        <Card.Title>{e.title}</Card.Title>
                        <Card.Text>
                          <img src="/rupee.png" />
                          <span>{e.quantity
                          }</span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  </Row>
           ))}


                </CardGroup>
          </div>
        </div>
        <div className="container">
          <div className="heading">
            <h1>Fruits</h1>
          </div>
          <div className="grid-4">
            <CardGroup>
              
                {fruits.map((e,index) => (
                  <Row xs={1} md={4} className="g-3" id="printrows">
                  <Col xs={12} md={6} lg={3} >
                    <Card style={{
                      width: "250px",
                      height: "300px"
                    }} onClick={()=>handleFruitcard(e,index)}>
                      <Card.Img variant="top" src={e.product_image
                      } style={{ width: "50%", height: "50%", marginTop: "21px", marginLeft: "78px" }} />
                      <Card.Body>
                        <Card.Title>{e.title}</Card.Title>
                        <Card.Text>
                          <img src="/rupee.png" />
                          <span>{e.quantity
                          }</span>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  </Row>
                ))}

             
            </CardGroup>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
