import React, { useState } from "react";
import { Drawer, Box, Typography, IconButton } from "@mui/material";
import { BsFillBellFill } from "react-icons/bs";
import "./MuiDrawer.css";

const MuiDrawer = () => {
  const [isDrawOpen, setIsDrawOpen] = useState(false);
  return (
    <div>
      <IconButton
        size="large"
        edge="bottom"
        arial-label="logo"
        onClick={() => setIsDrawOpen(true)}
      >
        <BsFillBellFill className="notification-icon" />
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawOpen}
        onClose={() => setIsDrawOpen(false)}
      >
        <Box style={{backgroundColor:'black', height:'100vh', backgroundSize:'cover'}} p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h1" sx={{ fontSize: "20px", color:'#b7b1b1' }}>
            Notifications
          </Typography>
          <li><BsFillBellFill className='notification-icon'/></li>
        </Box>
      </Drawer>
    </div>
  );
};
export default MuiDrawer;
