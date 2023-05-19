import React from "react";
import { Button } from "@mui/material";
import { Boy, Login, Mail, Man, PrivacyTip, Search } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function HomePageMenu() {
    const navigate = useNavigate();

    return (
        <>

            <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
                <Button
                    startIcon={<Search />}
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
                    startIcon={<Login />}
                    style={{
                        backgroundColor: "#ED8B06",
                        color: "#FFFFFF",
                        padding: "8px 16px",
                        width: "65vw",
                        margin: "0 auto",
                        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)"
                    }}
                    onClick={() => {
                        navigate("/login");
                    }}
                    variant="outlined"
                >
                    Login
                </Button>
                <Button
                    startIcon={<Boy />}
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
                    startIcon={<Man />}
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


            <div style={{ margin: "30px", alignItems: "center", display: "flex", flexDirection: "column", gap: "20px" }}>
                <Button
                    startIcon={<Mail />}
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
                    startIcon={<PrivacyTip />}
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

        </>
    )
}