import React from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Link,
  HStack,
  Icon,
  Divider,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" mt={20}>
      <Container maxW="6xl" py={10}>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={8}
          justify="space-between"
          align="center"
        >
          <Text
            bgGradient="linear(to-br, gray.300, green.200, cyan.300, teal.400)"
            bgClip="text"
            fontSize="2xl"
            fontWeight="extrabold"
          >
            Portfolio
          </Text>

          <HStack spacing={6}>
            <Link href="https://github.com" isExternal>
              <Icon
                as={FaGithub}
                boxSize={6}
                color="gray.400"
                _hover={{ color: "white", transform: "scale(1.2)" }}
                transition="all 0.2s"
              />
            </Link>
            <Link href="https://linkedin.com" isExternal>
              <Icon
                as={FaLinkedin}
                boxSize={6}
                color="gray.400"
                _hover={{ color: "white", transform: "scale(1.2)" }}
                transition="all 0.2s"
              />
            </Link>
            <Link href="mailto:email@example.com">
              <Icon
                as={FaEnvelope}
                boxSize={6}
                color="gray.400"
                _hover={{ color: "white", transform: "scale(1.2)" }}
                transition="all 0.2s"
              />
            </Link>
          </HStack>
        </Stack>

        <Divider my={6} borderColor="gray.600" />

        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify="space-between"
          align="center"
        >
          <Text fontSize="sm" color="gray.400">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </Text>
          <HStack spacing={6} fontSize="sm">
            <Link href="#about" color="gray.400" _hover={{ color: "white" }}>
              About
            </Link>
            <Link href="#projects" color="gray.400" _hover={{ color: "white" }}>
              Projects
            </Link>
            <Link href="#contact" color="gray.400" _hover={{ color: "white" }}>
              Contact
            </Link>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
