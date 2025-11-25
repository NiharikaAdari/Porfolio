import React from "react";
import { Box } from "@chakra-ui/react";
import AnimatedBackground from "./components/ui/AnimatedBackground";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Box minH="100vh">
      <AnimatedBackground />
      <Navbar />
      <Home />
      <Footer />
    </Box>
  );
}

export default App;
