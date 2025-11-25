import React from "react";
import { Box } from "@chakra-ui/react";
import Hero from "../components/sections/Hero";
import AboutMe from "../components/sections/AboutMe";
import ProjectsGallery from "../components/sections/ProjectsGallery";
import TechnicalSkills from "../components/sections/TechnicalSkills";
import Impact from "../components/sections/Impact";
import Contact from "../components/sections/Contact";

const Home = () => {
  return (
    <Box>
      <Hero />
      <AboutMe />
      <ProjectsGallery />
      <TechnicalSkills />
      <Impact />
      <Contact />
    </Box>
  );
};

export default Home;
