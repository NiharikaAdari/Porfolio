import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Button,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFileAlt,
} from "react-icons/fa";

const MotionBox = motion(Box);

const ContactItem = ({ icon, label, value, href, isExternal = true }) => (
  <Link
    href={href}
    isExternal={isExternal}
    _hover={{ textDecor: "none" }}
    w="100%"
  >
    <Box
      bg="cyan.300"
      borderRadius={30}
      p={6}
      boxShadow="5px 5px 10px gray"
      _hover={{
        bg: "cyan.400",
        transform: "translateY(-5px)",
        boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.3)",
      }}
      transition="all 0.3s"
    >
      <HStack spacing={4}>
        <Icon as={icon} boxSize={8} color="teal.600" />
        <VStack align="start" spacing={0}>
          <Text fontWeight="bold" color="teal.700">
            {label}
          </Text>
          <Text fontSize="sm" color="gray.700">
            {value}
          </Text>
        </VStack>
      </HStack>
    </Box>
  </Link>
);

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "email@example.com",
      href: "mailto:email@example.com",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/username",
      href: "https://linkedin.com/in/username",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/username",
      href: "https://github.com/username",
    },
  ];

  return (
    <Box id="contact" py={20}>
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
              Get In Touch
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
              I'm always open to discussing new opportunities, collaborations,
              or just having a chat about technology. Feel free to reach out!
            </Text>
          </MotionBox>

          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={6}
            maxW="900px"
            mx="auto"
            w="100%"
          >
            {contactInfo.map((item, index) => (
              <MotionBox
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ContactItem {...item} />
              </MotionBox>
            ))}
          </SimpleGrid>

          {/* Resume Button */}
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            textAlign="center"
          >
            <Button
              as="a"
              href="#"
              target="_blank"
              leftIcon={<Icon as={FaFileAlt} />}
              bg="teal.400"
              color="white"
              size="lg"
              borderRadius="full"
              boxShadow="lg"
              px={8}
              _hover={{
                bg: "teal.500",
                transform: "translateY(-2px)",
                boxShadow: "xl",
              }}
              transition="all 0.2s"
            >
              View Resume
            </Button>
          </MotionBox>
        </VStack>
      </Container>
    </Box>
  );
};

export default Contact;
