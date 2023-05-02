import React, { useEffect, useState } from "react";
import '../Cssfiles/FarmerNavBar.css'
import { useNavigate } from "react-router-dom";
import { Button, Form, NavDropdown } from "react-bootstrap";
import axios from "axios";
import { Autocomplete, TextField } from "@mui/material";

function CustomerNavbar() {

    const handleOrders = () => {
        navigate('/recievedorder')
    }

    const navigate = useNavigate();
    const [pinCode, setPincode] = useState()
    const [data, setData] = useState([]);



    const [fruits, setFruits] = useState([]);

    const [veg, setVeg] = useState([]);

    const [combineItems, setCombineItems] = useState([]);

    const [empty, setEmpty] = useState();

    const handleClick = () => {
        axios.get(`http://192.168.5.35:8000/veglistbypin/${pinCode}`).then((resp) => {
            if (resp.status === 200) {

                navigate('/PinResult', { state: resp.data })
            }
        }
        )

    }
    useEffect(() => {
        axios.get("http://192.168.5.35:8000/frtlist/").then((response) => {
            setFruits(response.data);
        });
    },
        []);
    useEffect(() => {
        axios.get("http://192.168.5.35:8000/veglist/").then((res) => {
            setVeg(res.data);
        });
    },
        []);
    const combine = [...fruits, ...veg];
    console.log("combine", combine);
    const [selectedValue, setSelectedValue] = useState("");
    const handleInputChange = (event, value) => {
        setSelectedValue(value);
    };
    const handleButton = () => {
        let ab = []
        combine.map((ele, i) => {
            if (ele.title === selectedValue) {
                console.log("ele", ele)
                ab.push(ele)
                navigate("/searchResult", { state: ab });
            }
        });
    };
    return (
        <div className="col-12">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" style={{ marginLeft: "25px" }}>
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
                                    Become a Seller
                                </a>
                            </li>
                            <NavDropdown
                                title="Categories"
                                id="navbarScrollingDropdown"
                                className="bold"
                            >
                                <NavDropdown.Item href="#action3" onClick={() => {
                                    navigate("/Dropveg")
                                }}>Vegetables</NavDropdown.Item>
                                <NavDropdown.Item href="#action4" onClick={() => {
                                    navigate('/Dropfruit')
                                }}>Fruits</NavDropdown.Item>
                            </NavDropdown>
                            <li class="nav-item navElements">
                                <a class="nav-link " href="/login">
                                    Login
                                </a>
                            </li>
                            <li class="nav-item navElements">
                                <a class="nav-link " href="#">
                                    cart
                                </a>
                            </li>
                            <li class="nav-item" >
                                <a class="nav-link profileName" style={{ color: "#228E38", fontWeight: "bold" }} href="#">
                                    Welcome Vinay
                                </a>
                            </li>
                        </ul>
                        <div class="ms-auto mb-2 " style={{ marginRight: "40px" }}>
                            
                            <Form className="d-flex">
                            <input type="text" placeholder='Pincode' value={pinCode} onChange={(e) => setPincode(e.target.value)} onClick={handleClick}  />

                                <Autocomplete  style={{marginLeft:"30px"}} freeSolo id="free-solo-2-demo" disableClearable options={combine.map((option) => option.title)}
                                    onInputChange={handleInputChange}
                                    renderInput={(params) =>
                                    (
                                        <TextField style={{ width: "200px" }}
                                            {...params} label="Search Item" InputProps={{ ...params.InputProps, type: "search", }}
                                        />)}
                                />
                                <Button variant="outline-success" onClick={handleButton}> <b>Search</b> </Button> 
                                </Form>
                              
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default CustomerNavbar;
