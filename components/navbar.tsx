import React from "react";
// Mui
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        height: "55px",
        boxShadow: " 0px 1px 13px 0px rgba(0,0,0,0.1)",
        paddingX: { xs: "5%", lg: "8%" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          height: "100%",
          width: "40%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            width: "35px",
            aspectRatio: "1/1",
            // objectFit: "cover",
            backgroundColor: "#5BC0F8",
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "white",
              marginX: "auto",
            }}
          >
            E
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="h6" sx={{ fontWeight: "600" }}>
            Eto
          </Typography>
          <Typography variant="h6"> yaa</Typography>
        </Box>
      </Box>
      <Box sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}>
        <MenuIcon sx={{ fontWeight: "bold" }} />
      </Box>
    </Box>
  );
};

export default Navbar;
