import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Becomeaseller from "./components/Becomeaseller";
import FarmerDashboard from "./components/FarmerDashboard";
import Customeregistration from "./components/Customeregistration";
import Changepassword from "./components/Changepassword";
import Addcrop from "./components/Addcrop";
import ShowingProducts from "./components/ShowingProducts";
import ShowingFruitProduct from "./components/ShowingFruitproduct";
import Cart from "./components/Cart";
import OrderSummary from "./components/OrderSummary";
import Addadress from "./components/Addadress";
import Categorie from "./components/Categorie";
import Dropdownveg from "./components/Dropdownveg";
import Dropdownfruit from "./components/Dropdownfruit";
import AddressInfo from "./components/AddressInfo";
import Layout from "./components/Layout";
import Header from "./components/Header";
import FarmersProfile from "./components/FarmersProfile";
import CustomerOrders from "./components/CustomerOrders";
import UpdateLogin from "./components/UpdateLogin";
import PincodeFilter from "./components/PincodeFilter";
import PinResult from "./components/PinResult";
import AddCropsLanding from "./components/AddCropsLanding";
import EditCrop from "./components/EditCrop";
import FarmerNavBar from "./components/FarmerNavBar";
import SearchResult from "./components/SearchResult";
import ReceivedOrders from "./components/ReceivedOrders";
import { useSelector } from "react-redux";
import { useState } from "react";
// import YoutubeForm from "./components/YoutubeForm";

function App() {
  const info = useSelector((select) => select.check.data);
  const[data,setData]=useState(info)

  return (
    <div className="App">
      {
        info?
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="becomeaseller" element={<Becomeaseller />} />
          <Route path="farmerdashboard" element={<FarmerDashboard />} />
          <Route path="customeregistration" element={<Customeregistration />} />
          <Route path="changepassword" element={<Changepassword />} />
          <Route path="VegiesProduct" element={<ShowingProducts />} />
          <Route path="FruitProduct" element={<ShowingFruitProduct />} />
          <Route path="Cart" element={<Cart />} />
          <Route path="ordersummary" element={<OrderSummary />} />
          <Route path="addaddress" element={<Addadress />} />
          <Route path="Categories" element={<Categorie />} />
          <Route path='Dropveg' element={<Dropdownveg />} />
          <Route path='Dropfruit' element={<Dropdownfruit />} />
          <Route path='addressInfo' element={<AddressInfo />} />
          <Route path='PincodeFilter' element={<PincodeFilter />} />
          <Route path='PinResult' element={<PinResult />} />
          <Route path='searchResult' element={<SearchResult />} />
        

        </Routes>
      </BrowserRouter>
      :
      <BrowserRouter>
     <FarmerNavBar/>
<Routes>
      <Route path='/' element={ <AddCropsLanding/>}/>
      <Route path="addcrop" element={<Addcrop />} />
      <Route path='editcrop' element={<EditCrop/>}/>
        <Route path='recievedorder' element={<ReceivedOrders />} />
        </Routes>
    </BrowserRouter> 
      }
     


      
      {/* <AddressInfo/> */}
      {/* <FarmersProfile/> */}


      {/* <YoutubeForm /> */}
      {/* <CustomerOrders/> */}
      {/* <Login/> */}
      {/* <UpdateLogin/> */}

    </div>
  );
}

export default App;
