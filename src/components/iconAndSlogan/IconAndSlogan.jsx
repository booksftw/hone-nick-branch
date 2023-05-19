import React from "react";
import { House } from "@mui/icons-material";
import { Typography } from "@mui/material";

export default function IconAndSlogan() {

    return (
        <>
            <div className="flex flex-col items-center" style={{ marginLeft: "4.8vw" }}>
                <House sx={{ maxWidth: "55%", marginTop: "10vw", fontSize: 100, color: "#ED8B06" }} />
                <Typography variant="h2" style={{ color: "#ED8B06", margin: "-0.2vw", fontWeight: "bold", fontFamily: "Montserrat, sans-serif" }}>
                </Typography>
                <Typography variant="subtitle" style={{ color: "#ED8B06", marginBottom: "20vw", fontWeight: "bold", fontFamily: "Montserrat, sans-serif" }}>
                    Find housing in your area
                </Typography>
            </div>
        </>
    )
}