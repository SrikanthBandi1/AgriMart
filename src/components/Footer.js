import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <div className="footer">
      <Navbar>
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="contain">
              Copyright 2023 // Designed By <a href="#login">E-farming </a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Footer;
