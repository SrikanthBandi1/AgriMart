import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

function Dropdownfruit() {
    const [fruits, setFruits] = useState([])
    const navigate=useNavigate();
    useEffect(() => {
      
        axios.get("http://192.168.5.35:8000/frtlist/").then((resp) => setFruits(resp.data))
      }, [])
      const handleFruitcard=(index)=>{
        console.log(index,"index")
        navigate('/FruitProduct',{ state: index })
          }

  return (
    <Layout>

    <div>
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
  )
}

export default Dropdownfruit
