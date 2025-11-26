import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Avatar,
  Button,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";
import headshotImage from "../../data/Headshot.jpg";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box id="hero" minH="80vh" display="flex" alignItems="center" justifyContent="center" py={20}>
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
        <HStack
          spacing={{ base: 8, lg: 16 }}
          flexDirection={{ base: "column", lg: "row" }}
          align="center"
          justify="center"
        >
          {/* Avatar/Headshot */}
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Avatar
              size="2xl"
              src={headshotImage}
              name="Niharika Adari"
              bg="teal.400"
              color="white"
              boxShadow="dark-lg"
              w={{ base: "150px", md: "200px" }}
              h={{ base: "150px", md: "200px" }}
              border="4px solid teal"

            />
          </MotionBox>

          {/* Hero Content */}
          <MotionVStack
            align={{ base: "center", lg: "flex-start" }}
            spacing={6}
            textAlign={{ base: "center", lg: "left" }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box
              bg="white"
              borderRadius={30}
              p={8}
              boxShadow="dark-lg"
              maxW="600px"
            >
              <Heading
                size={{ base: "xl", md: "2xl" }}
                bgGradient="linear(to-r, teal.400, cyan.400, teal.600)"
                bgClip="text"
                mb={2}
              >
                Hello, I'm
              </Heading>
              <Heading
                size={{ base: "2xl", md: "3xl" }}
                color="gray.800"
                mb={4}
              >
                Niharika Adari
              </Heading>
              <Text
                fontSize={{ base: "lg", md: "xl" }}
                color="teal.600"
                fontWeight="semibold"
                mb={4}
              >
                Full-Stack Software Developer | DS Enthusiast
              </Text>
              <Text fontSize="md" color="gray.600" lineHeight="tall">
                Passionate about building innovative solutions and creating
                impactful software that makes a difference. Specializing in
                full-stack development, cloud technologies, and LLMs.
              </Text>
            </Box>

            <Button
              onClick={scrollToAbout}
              bg="teal.400"
              color="white"
              size="lg"
              borderRadius="full"
              boxShadow="lg"
              rightIcon={<Icon as={FaArrowDown} />}
              _hover={{
                bg: "teal.500",
                transform: "translateY(2px)",
              }}
              transition="all 0.2s"
            >
              Learn More
            </Button>
          </MotionVStack>
        </HStack>
        </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;