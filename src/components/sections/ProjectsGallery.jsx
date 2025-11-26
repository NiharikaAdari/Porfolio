import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import ProjectCard from "../ui/ProjectCard";
import ProjectModal from "../ui/ProjectModal";
import { projects } from "../../data/projects";

const MotionBox = motion(Box);

const ProjectsGallery = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    onOpen();
  };

  return (
    <Box id="projects" py={20} display="flex" justifyContent="center" alignItems="center">
      <Box
        bg="gray.800"
        borderRadius={30}
        boxShadow="dark-lg"
        p={12}
        maxW="6xl"
        w="100%"
        mx={6}
      >
        <Container maxW="6xl">
        <VStack spacing={12} align="stretch">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Heading
              textAlign="center"
              size="2xl"
              bgGradient="linear(to-r, teal.400, cyan.400)"
              bgClip="text"
              mb={4}
            >
              Projects
            </Heading>
            <Text
              textAlign="center"
              fontSize="lg"
              color="gray.600"
              maxW="800px"
              mx="auto"
              bg="white"
              p={4}
              borderRadius="lg"
              boxShadow="md"
            >
              A collection of projects that showcase my skills and passion for
              building impactful software. Click on any project to learn more.
            </Text>
          </MotionBox>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={8}
          >
            {projects.map((project, index) => (
              <MotionBox
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard
                  project={project}
                  onClick={handleProjectClick}
                />
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      <ProjectModal
        isOpen={isOpen}
        onClose={onClose}
        project={selectedProject}
      />
      </Box>
    </Box>
  );
};

export default ProjectsGallery;
