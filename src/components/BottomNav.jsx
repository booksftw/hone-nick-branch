import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./BottomNav.css";
import { useState } from "react";

export default function BottomNav() {
  const [value, setValue] = React.useState("");

  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <Box position="sticky" sx={{ width: "100%" }} className="bg-orange">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(newValue);
        }}
        sx={{
          justifyContent: "space-around",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
        }}
        className="bg-orange"
      >
        <BottomNavigationAction
          value="profile"
          label="Profile"
          icon={<AccountCircleIcon />}
        />
        <BottomNavigationAction
          value="hone"
          label="Find A Hone"
          icon={<HomeIcon />}
          // className={
          //   isClicked
          //     ? (sx = { bgcolor: "orange" })
          //     : (sx = { bgcolor: "gray" })
          // }
          onClick={handleClick}
        />
        <BottomNavigationAction
          value="match"
          label="Matches"
          icon={<FavoriteIcon />}
          // className={isClicked ? "bg-orange-600" : "bg-gray-100"}
          // onClick={handleClick}
        />
      </BottomNavigation>
    </Box>
  );
}
