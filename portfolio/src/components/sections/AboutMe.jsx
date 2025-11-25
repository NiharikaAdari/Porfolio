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
  const aboutCards = [
    {
      title: "🎓 Education",
      content:
        "Pursuing a degree in Computer Science with a focus on software engineering and data science. Continuously learning and expanding my knowledge through coursework and personal projects.",
    },
    {
      title: "💻 Experience",
      content:
        "Hands-on experience in full-stack development, from building responsive web applications to designing scalable backend systems. Proficient in modern development practices and agile methodologies.",
    },
    {
      title: "🎯 Goals",
      content:
        "Aspiring to work on innovative projects that solve real-world problems. Passionate about contributing to open source and building technology that makes a positive impact on society.",
    },
    {
      title: "🌟 Interests",
      content:
        "Beyond coding, I enjoy exploring new technologies, participating in hackathons, and mentoring fellow developers. Always eager to learn and share knowledge with the community.",
    },
  ];

  return (
    <Box id="about" py={20}>
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
                  bg={index % 2 === 0 ? "cyan.300" : "teal.200"}
                  borderRadius={30}
                  p={8}
                  boxShadow="5px 5px 10px gray"
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
                    <Text color="gray.700" lineHeight="tall">
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
  );
};

export default AboutMe;
