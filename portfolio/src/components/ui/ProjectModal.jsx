import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  VStack,
  HStack,
  Tag,
  Link,
  Box,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectModal = ({ isOpen, onClose, project }) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl" scrollBehavior="inside">
      <ModalOverlay bg="blackAlpha.700" backdropFilter="blur(10px)" />
      <ModalContent
        bg="white"
        borderRadius={20}
        boxShadow="dark-lg"
        mx={4}
      >
        <ModalHeader
          bgGradient="linear(to-r, teal.400, cyan.400)"
          bgClip="text"
          fontSize="2xl"
          fontWeight="bold"
        >
          {project.title}
        </ModalHeader>
        <ModalCloseButton />
        
        <ModalBody>
          <VStack align="stretch" spacing={5}>
            {/* Project Image/Video Placeholder */}
            <Box
              bg="gray.200"
              borderRadius="lg"
              h="200px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text color="gray.500" fontSize="lg">
                {project.video ? "🎬 Video Demo" : "🖼️ Project Preview"}
              </Text>
            </Box>

            <Divider />

            {/* Description */}
            <Box>
              <Text fontWeight="bold" color="teal.600" mb={2}>
                Description
              </Text>
              <Text color="gray.700" lineHeight="tall">
                {project.longDescription}
              </Text>
            </Box>

            <Divider />

            {/* Skills/Technologies */}
            <Box>
              <Text fontWeight="bold" color="teal.600" mb={2}>
                Technologies Used
              </Text>
              <HStack wrap="wrap" spacing={2}>
                {project.skills.map((skill, index) => (
                  <Tag
                    key={index}
                    size="md"
                    colorScheme="teal"
                    borderRadius="full"
                    px={3}
                    py={1}
                  >
                    {skill}
                  </Tag>
                ))}
              </HStack>
            </Box>

            <Divider />

            {/* Links */}
            <Box>
              <Text fontWeight="bold" color="teal.600" mb={2}>
                Links
              </Text>
              <HStack spacing={4}>
                {project.githubLink && (
                  <Link 
                    href={project.githubLink} 
                    isExternal
                    _hover={{ textDecor: "none" }}
                  >
                    <Button
                      leftIcon={<Icon as={FaGithub} />}
                      colorScheme="gray"
                      variant="solid"
                      size="sm"
                    >
                      GitHub
                    </Button>
                  </Link>
                )}
                {project.liveLink && (
                  <Link 
                    href={project.liveLink} 
                    isExternal
                    _hover={{ textDecor: "none" }}
                  >
                    <Button
                      leftIcon={<Icon as={FaExternalLinkAlt} />}
                      colorScheme="teal"
                      variant="solid"
                      size="sm"
                    >
                      Live Demo
                    </Button>
                  </Link>
                )}
              </HStack>
            </Box>
          </VStack>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={onClose}
            bg="teal.400"
            color="white"
            _hover={{ bg: "teal.500" }}
            borderRadius="full"
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ProjectModal;
