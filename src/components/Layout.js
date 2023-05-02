import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import CustomerNavbar from "./CustomerNavbar";

function Layout(props) {
  return (
    <div>
      <CustomerNavbar/>
      {props.children}
      <Footer />
    </div>
  );
}

export default Layout;
