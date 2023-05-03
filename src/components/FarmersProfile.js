import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Layout from './Layout'

function FarmersProfile() {
    return (
        <Layout>


            <div style={{ marginTop: "80px" }}>
                <Form>

                    <h3 className='textHeading mt-2' style={{
                        color: "var(--unnamed-color-228e38)",
                       marginLeft:"40px",
                        font: "normal normal bold 24px/35px Poppins",
                        letterSpacing: "0px",
                        color: " #228E38",
                        opacity: 1
                    }}>Profile</h3>

                    <Form.Group className="mt-4" >

                        <Row>

                            <Col sm="2" style={{marginLeft:"30px"}}>
                                <Form.Label><span ><p className='py-2 pcolor' >User Name:</p></span></Form.Label>
                            </Col>

                            <Col sm="3">

                                <Form.Control type="email" id='boxes' placeholder="Enter email"

                                />

                            </Col>
                            <Col sm="2">
                                <Form.Label><span ><p className='py-2 pcolor' >Email :</p></span></Form.Label>
                            </Col>

                            <Col sm="3">

                                <Form.Control type="email" id='boxes' placeholder="Enter email"

                                />

                            </Col>

                        </Row>

                    </Form.Group>


                    <Form.Group className="mt-4" >

                        <Row>

                            <Col sm="2" style={{marginLeft:"30px"}}>
                                <Form.Label><span ><p className='py-2 pcolor' >Name:</p></span></Form.Label>
                            </Col>

                            <Col sm="3">

                                <Form.Control type="email" id='boxes' placeholder="Enter email"

                                />

                            </Col>
                            <Col sm="2">
                                <Form.Label><span ><p className='py-2 pcolor' >Mobile:</p></span></Form.Label>
                            </Col>

                            <Col sm="3">

                                <Form.Control type="email" id='boxes' placeholder="Enter email"

                                />

                            </Col>

                        </Row>

                    </Form.Group>
                </Form>

                <div className="row">
                    <div className='col-6'>
                        <button style={{ marginTop: "50px", marginLeft: "500px", width: "120px", height: "40px", backgroundColor: "green", color: "white", border: "0" }}>Update</button>
                    </div>
                    <div className='col-6'>
                        <button style={{ marginTop: "50px", width: "120px", height: "40px", backgroundColor: "blue", color: "white", border: "0" }}>Back</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default FarmersProfile
