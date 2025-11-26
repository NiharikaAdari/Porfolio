import React, { useState } from "react";
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaFileAlt,
  FaDownload,
} from "react-icons/fa";
import resumePdf from "../../data/NiharikaAdari_Resume.pdf";

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
      boxShadow="0 10px 30px rgba(0,0,0,0.6), 0 0 18px rgba(255,255,255,0.02)"
      _hover={{
        bg: "cyan.400",
        transform: "translateY(-5px)",
        boxShadow: "0 18px 36px rgba(0,0,0,0.7)",
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
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: "adari.niharika13@gmail.com",
      href: "mailto:adari.niharika13@gmail.com",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/niharika-adari",
      href: "https://www.linkedin.com/in/niharika-adari-9b5519253/?profileId=ACoAAD6L_1kB4JOOOivUFQnxgcKZLeiaXrjlK84",
    },
    {
      icon: FaGithub,
      label: "GitHub",
      value: "github.com/NiharikaAdari",
      href: "https://github.com/NiharikaAdari",
    },
  ];

  return (
    <Box id="contact" py={20} display="flex" justifyContent="center" alignItems="center">
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
              onClick={onOpen}
            >
              View Resume
            </Button>

            {/* Resume Preview Modal */}
            <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
              <ModalOverlay bg="blackAlpha.600" />
              <ModalContent maxH="90vh" overflow="auto">
                <ModalHeader>Resume Preview</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                  <iframe
                    src={resumePdf}
                    width="100%"
                    height="600px"
                    style={{ border: "none", borderRadius: "8px" }}
                    title="Resume Preview"
                  />
                </ModalBody>
                <ModalFooter>
                  <Button
                    as="a"
                    href={resumePdf}
                    download="NiharikaAdari_Resume.pdf"
                    leftIcon={<Icon as={FaDownload} />}
                    bg="teal.400"
                    color="white"
                    _hover={{ bg: "teal.500" }}
                    mr={3}
                  >
                    Download
                  </Button>
                  <Button variant="ghost" onClick={onClose}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </MotionBox>
        </VStack>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
