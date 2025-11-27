import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const AboutMe = () => {
  const colors = ["teal.200", "cyan.200", "green.200", "teal.200"];
  
  const aboutCards = [
    {
      title: "🎓 Education",
      content:
      "❃ Graduated Summa Cum Laude with a 3.97 GPA in Computer Science from the University of South Florida. \n❃ Served as Vice President of the Women in Computer Science Club (WiCSE), leading community initiatives, mentorship, and technical growth for members. Continuously learning and expanding my knowledge through coursework and personal projects.",    },
    {
      title: "💻 Experience",
      content:
      "❃ Currently a fullstack Software Engineer at Citibank, contributing to large-scale AWS cloud migration efforts. Migrated mission-critical microservices to EKS, modernized 4,200+ database objects for Aurora PostgreSQL, expanded automation suites, and designed production-adopted architectural solutions. \n❃ Previously worked as a SAS2PY Intern, translating SAS pipelines into Python for data analysis workflows and re-implementing statistical procedures such as PROC MEANS for automated descriptive analytics",    },
    {
      title: "🔬 Research & Teaching",
      content:
"❃ Previously a Research Assistant in USF’s SEES Lab, developing algorithms for specification mining that accelerated pattern identification by 14×. \n❃ Also served as a Teaching Assistant for Data Structures, supporting students with C++ concepts and exam preparation.",
    },
    {
      title: "🌟 Interests & Goals",
      content:
  "❃ I’m driven by building human-centered learning tools informed by data science. My focus is on using AI not to shortcut understanding but to strengthen it, creating systems that organize information, surface misconceptions, and guide students through meaningful learning. \n❃ StudyKeet grew out of this mission, a response to how AI was often misused in my classes and a step toward technology that truly supports comprehension, equity, and student confidence. I enjoy exploring how data, structured knowledge, and science-based methods can solve real educational problems and make effective learning accessible to everyone.",    },
  ];

  return (
    <Box id="about" py={20} display="flex" justifyContent="center" alignItems="center" pt={5} pb={5}>
      <Box bg="teal.300" borderRadius={36} p={4} maxW="100%" display="flex" justifyContent="center">
        <Box
          bg="gray.800"
          borderRadius={30}
          boxShadow="dark-lg"
          p={12}
          maxW="6xl"
          w="100%"
          border="2px solid rgba(255,255,255,0.9)"
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
              About Me
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
              A passionate developer with a love for creating elegant solutions
              to complex problems. Here's a bit more about who I am and what
              drives me.
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {aboutCards.map((card, index) => (
              <MotionBox
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  bg={colors[index]}
                  borderRadius={30}
                  p={8}
                  boxShadow="0 10px 30px rgba(0,0,0,0.6), 0 0 18px rgba(255,255,255,0.02)"
                  minH="200px"
                  _hover={{
                    transform: "translateY(-5px)",
                    boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.3)",
                  }}
                  transition="all 0.3s"
                >
                  <VStack align="stretch" spacing={4}>
                    <Heading
                      size="md"
                      bgGradient="linear(to-b, teal.500, gray.800)"
                      bgClip="text"
                    >
                      {card.title}
                    </Heading>
                    <Text color="gray.700" lineHeight="tall" whiteSpace="pre-line">
                      {card.content}
                    </Text>
                  </VStack>
                </Box>
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutMe;
