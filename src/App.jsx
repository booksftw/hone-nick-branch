import { useState } from "react";
import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import Nav from "./components/Nav.jsx";
import BottomNav from "./components/BottomNav.jsx";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import TenantForm from "./components/signup/TenantForm";
import LandlordForm from "./components/signup/LandlordForm";
import AboutUs from "./components/common/AboutUs";
import PrivacyPolicy from "./components/common/PrivacyPolicy";
import IconAndSlogan from "./components/iconAndSlogan/iconAndSlogan";
import LoginForm from "./components/loginForm/LoginForm";
import HomePageMenu from "./components/homePageMenu/HomePageMenu";

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

          <IconAndSlogan />

          <Routes>
            {/* '/' : Home */}
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/createaccount" element={<TenantForm />} />
            <Route path="/createaccount2" element={<LandlordForm />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            <Route path="/login" element={<LoginForm />} />
          </Routes>

          <h1 className="text-3xl font-bold mb-10 underline text-green-400">
            Hello world! Tailwind Test
          </h1>

          {/* Menu navigation */}
          <HomePageMenu />



        </div>
        <BottomNav />
      </div>
    </ThemeProvider>
  );
}

export default App;
