import React from "react";
// MUI
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
// icon
import {
  DesktopWindowsOutlined,
  StorefrontOutlined,
  Diversity1Outlined,
  BorderColorOutlined,
} from "@mui/icons-material";
const WhatIDo = () => {
  const whatIDoData = [
    {
      icon: (
        <DesktopWindowsOutlined sx={{ color: "#19A7CE", fontSize: "40px" }} />
      ),
      title: "Web Design",
      details:
        "Web design is crucial for creating an engaging website that conveys your brand message, showcases your offerings, and provides a seamless user experience. It can also improve your onlinevisibility and help you achieve your business goals.",
    },
    {
      icon: <StorefrontOutlined sx={{ color: "#19A7CE", fontSize: "40px" }} />,
      title: "E-commerce",
      details:
        "E-commerce enables businesses to sell products and services online, allowing them to reach a wider audience, reduce operational costs, and increase revenue. E-commerce platforms offer features such as secure payment processing, inventory management, and shipping integration, making it easier for businesses to manage their online store and provide a seamless shopping experience for customers.",
    },
    {
      icon: <Diversity1Outlined sx={{ color: "#19A7CE", fontSize: "40px" }} />,
      title: "Marketing",
      details:
        "Marketing is essential for promoting your business and its offerings to your target audience. Effective marketing strategies can increase brand awareness, generate leads, and drive sales. By understanding your customers' needs and preferences, you can tailor your marketing efforts to reach and engage with them, ultimately helping you achieve your business goals.",
    },
    {
      icon: <BorderColorOutlined sx={{ color: "#19A7CE", fontSize: "40px" }} />,
      title: "Copywriting",
      details:
        "Copywriting is the art of writing persuasive and compelling content that motivates readers to take action. Effective copywriting can help you connect with your audience, build brand credibility, and drive conversions. By crafting persuasive messages that resonate with your target market, you can increase engagement, build relationships, and achieve your marketing goals.",
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <Box className="w-fit">
        <Typography variant="h5" sx={{ fontWeight: "500" }}>
          What I Do
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: "2px",
            backgroundColor: "rgba(4,4,4,0.1)",
          }}
        >
          <Box
            sx={{
              left: "0",
              width: "30%",
              height: "100%",
              backgroundColor: "#007fff",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {whatIDoData.map((e) => (
          <Box
            key={e.title}
            sx={{
              width: { xs: "100%", sm: "45%" },
              display: "flex",
              gap: "30px",
            }}
          >
            <Box>{e.icon}</Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <Typography sx={{ fontWeight: "600" }}>{e.title}</Typography>
              <Typography sx={{ fontSize: "0.85rem", color: "#797979" }}>
                {e.details}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default WhatIDo;
