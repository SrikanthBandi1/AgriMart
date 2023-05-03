import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';

function Dropdownveg() {
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
    
    return (

<Layout>
        <div className="container" style={{marginTop:"120px"}}>
            <div className="heading">
                <h1>Vegetables</h1>
            </div>
            <div className="grid-4">
                <CardGroup>

                    {vegies.map((e, i) => (
                        <Row xs={1} md={4} className="g-3" id="printrows">
                            <Col xs={12} md={6} lg={3} >
                                <Card style={{
                                    width: "250px",
                                    height: "300px", display: "flex"
                                }} onClick={() => handleCard(e, i)}>
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
        </Layout>
    )
}



export default Dropdownveg
