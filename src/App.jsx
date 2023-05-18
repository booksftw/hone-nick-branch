import { useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import {Boy, ContactMail, Create, House, Info, Login, Mail, Man, PrivacyTip, Search } from "@mui/icons-material";
import Nav from "./components/Nav.jsx";
import BottomNav from "./components/BottomNav.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import TenantForm from "./components/signup/TenantForm";
import LandlordForm from "./components/signup/LandlordForm";
import AboutUs from "./components/common/AboutUs";
import PrivacyPolicy from "./components/common/PrivacyPolicy";

function App() {
  // const location = useLocation();
  const navigate = useNavigate();
  const theme = createTheme({
    palette: {
      background: {
        default: "#fffee1",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Nav />
        <div className="w-full px-2 sm:px-0 sm:w-3/4 lg:w-2/4 py-4 md:pb-8 h-full md:h-[90vh]" >
        {/* <img
          className="object-cover mx-auto" // If you want the image to cover the full width/height of the div
          alt="Example"
          src={imageSrc}
          style={{ maxWidth: "55%", margin: "15vw auto ", display: "block"}}

        /> */}
         <div className="flex flex-col items-center" style={{marginLeft:"4.8vw"}}>
            
            <House sx={{ maxWidth: "55%",marginTop: "10vw", fontSize: 100, color: "#ED8B06" }} />
            <Typography variant="h2" style={{ color: "#ED8B06", margin: "-0.2vw",fontWeight: "bold", fontFamily: "Montserrat, sans-serif" }}>
            </Typography>
          <Typography variant="subtitle" style={{ color: "#ED8B06", marginBottom: "20vw",fontWeight: "bold", fontFamily: "Montserrat, sans-serif" }}>
              Find housing in your area
            </Typography>
          </div>
        
  
      <Routes>
        {/* '/' : Home */}
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/createaccount" element={<TenantForm />} />
        <Route path="/createaccount2" element={<LandlordForm />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
      </Routes>

  <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
    <Button
      startIcon={<Search/>}
      className="my-2 py-2 rounded-lg"
      style={{
        backgroundColor: "#ED8B06",
        color: "#FFFFFF",
        padding: "8px 16px",
        width: "65vw",
        margin: "0 auto",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)"
      }}
      onClick={() => {
        navigate("/");
      }}
      variant="outlined"
    >
      Listings
    </Button>
    <Button
      startIcon={<Login/>}
      style={{
        backgroundColor: "#ED8B06",
        color: "#FFFFFF",
        padding: "8px 16px",
        width: "65vw",
        margin: "0 auto",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)"
      }}
      onClick={() => {
        navigate("/");
      }}
      variant="outlined"
    >
      Login
    </Button>
    <Button
      startIcon={<Boy/>}
      style={{
        backgroundColor: "#ED8B06",
        color: "#FFFFFF",
        padding: "8px 16px",
        width: "65vw",
        margin: "0 auto",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)"
      }}
      onClick={() => {
        navigate("/createaccount");
      }}
      variant="outlined"
    >
      Tenant Create Account
    </Button>
    <Button
      startIcon={<Man/>}
      style={{
        backgroundColor: "#ED8B06",
        color: "#FFFFFF",
        padding: "8px 16px",
        width: "65vw",
        margin: "0 auto",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)"
      }}
      onClick={() => {
        navigate("/createaccount2");
      }}
      variant="outlined"
    >
      Landlord Create Account
    </Button>
  </div>
  <div style={{ margin:"30px",alignItems: "center", display: "flex", flexDirection: "column", gap: "20px" }}>
    <Button
      startIcon={<Mail/>}
      style={{
        backgroundColor: "#ED8B06",
        color: "#FFFFFF",
        padding: "8px 16px",
        width: "65vw",
        margin: "0 auto",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)"
      }}
      onClick={() => {
        navigate("/aboutus");
      }}
      variant="outlined"
    >
      About Us
    </Button>
    <Button
      className="my-2 py-2 rounded-lg"
      startIcon={<PrivacyTip/>}
      style={{
        backgroundColor: "#ED8B06",
        color: "#FFFFFF",
        padding: "8px 16px",
        width: "65vw",
        margin: "0 auto",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)"
      }}
      onClick={() => {
        navigate("/privacypolicy");
      }}
      variant="outlined"
    >
      Privacy Policy
    </Button>
  </div>

      </div>
        <BottomNav />
      </div>
    </ThemeProvider>
  );
}

export default App;
