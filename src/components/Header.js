import { Autocomplete, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";


function Header() {
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
    <div>
      <Navbar expand="lg" className="nav" fixed="top">
        <Container fluid>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            <img src="D:\eform\public\logo.png" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 "
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
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
              <Nav.Link
                onClick={() => {
                  navigate("/becomeaseller");
                }}
              >
                <b>Become a Seller</b>
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/login");
                }}
              >
                <b>Log In</b>
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  navigate("/Cart");
                }}
              >
                <b>Cart</b>
              </Nav.Link>
             
            </Nav>
            <input type="text" placeholder='Pincode' value={pinCode} onChange={(e) => setPincode(e.target.value)} onClick={handleClick} />
            <Form className="d-flex">
              <Autocomplete freeSolo id="free-solo-2-demo" disableClearable options={combine.map((option) => option.title)}
                onInputChange={handleInputChange}
                renderInput={(params) =>
                (
                  <TextField style={{ width: "200px" }}
                    {...params} label="Search Item" InputProps={{ ...params.InputProps, type: "search", }}
                  />)}
              />
              <Button variant="outline-success" onClick={handleButton}> <b>Search</b> </Button> </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
