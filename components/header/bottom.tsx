import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Bottom = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: { xs: "center", sm: "flex-start" },
        }}
      >
        <Typography variant="body1" sx={{ color: "#B5B5B5" }}>
          Web Developer
        </Typography>
        <Typography variant="h4" sx={{ fontWeight: "600" }}>
          Etoyaa
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "30px",
          alignItems: { xs: "center", sm: "flex-start" },
        }}
      >
        <Box sx={{ width: "100%", color: "#797979" }}>
          <Typography>
            I help businesses and individuals achieve their goals through
            creative and effective solutions. My portfolio showcases my skills
            across various industries and mediums. Lets collaborate on your next
            project
          </Typography>
        </Box>
        <Box sx={{}}>
          <Button
            sx={{
              border: "2px solid #19A7CE",
              borderRadius: "200px",
              width: "150px",
              color: "black",
              boxShadow: "0px 13px 9px -10px rgba(0,0,0,0.33)",
            }}
          >
            Contact
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Bottom;
