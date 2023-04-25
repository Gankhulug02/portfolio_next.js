import { Box } from "@mui/material";
import React from "react";
import Bottom from "./bottom";
import Top from "./top";

const Header = () => {
  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "flex" },
        flexDirection: { xs: "column", sm: "row" },
        gap: { xs: "10px", sm: "40px" },
        margin: "auto",
        maxWidth: { xs: "100%", md: "80%" },
        py: 10,
      }}
    >
      <Top />
      <Bottom />
    </Box>
  );
};

export default Header;
