import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React from "react";
import { useState } from "react";
import { Box, Menu, MenuItem, Tooltip } from "@mui/material";
import "./Nav.css";
import StyledBadge from "@mui/material/Badge";

// import tailwindConfig from "../../tailwind";

export default function Nav() {
  const [anchorElNav, setAnchorElNav] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(false);

  const settings = ["Sharah Matched!", "Richard Matched!", "Megan Matched!"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{ position: "fixed", top: 0, left: 0, right: 0 }}
      color="default"
    >
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          variant="dot"
          // sx={{
          //   "& .MuiBadge-badge": {
          //     color: "lightgreen",
          //     backgroundColor: "green",
          //   },
          // }}
        >
          <Avatar alt="User Avatar">H</Avatar>
        </StyledBadge>

        <Typography variant="h4">Hone</Typography>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Badge badgeContent={3}>
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            // id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
