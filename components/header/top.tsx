import { Box } from "@mui/system";
import React from "react";

const Top = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: { xs: "40%", sm: "100%" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: { xs: "250px", lg: "300px" },
          aspectRatio: "1/1",
          backgroundColor: "white",
          borderRadius: "50%",
          overflow: "hidden",
          objectFit: "cover",
          boxShadow: " 0px 1px 13px 0px rgba(0,0,0,0.2)",
        }}
      >
        <Box
          sx={{
            width: "90%",
            aspectRatio: "1/1",
            backgroundColor: "white",
            borderRadius: "50%",
            overflow: "hidden",
            objectFit: "cover",
          }}
        >
          <img src="profile.jpeg" alt="" className="-mt-14 " />
        </Box>
      </Box>
    </Box>
  );
};

export default Top;
