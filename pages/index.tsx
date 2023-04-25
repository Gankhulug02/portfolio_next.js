import Head from "next/head";

import { Roboto, Josefin_Sans } from "next/font/google";
import { Box } from "@mui/system";
import Navbar from "@/components/navbar";
import Header from "@/components/header/header";
import WhatIDo from "@/components/whatIDo";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import FunFacts from "@/components/funFacts";
import ToTopBtn from "@/components/toTopBtn";
import Footer from "@/components/footer";

export default function Home() {
  const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: "#007FFF",
      },
      secondary: {
        // This is green.A700 as hex.
        main: "#11cb5f",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar />
        <Box
          sx={{
            px: { xs: 4, xl: 35 },
          }}
        >
          <Header />
          <WhatIDo />
          <FunFacts />
          <ToTopBtn />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
