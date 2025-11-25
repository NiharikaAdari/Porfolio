import React, { useState } from "react";
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
  Wrap,
  WrapItem,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt, FaLinkedin } from "react-icons/fa";

const ProjectModal = ({ isOpen, onClose, project }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
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
            {/* Video Demo */}
            {project.video && (
              <Box borderRadius="lg" overflow="hidden" boxShadow="md">
                <video
                  src={project.video}
                  controls
                  style={{
                    width: '100%',
                    height: 'auto',
                    maxHeight: '300px',
                  }}
                >
                  Your browser does not support the video tag.
                </video>
              </Box>
            )}

            {/* Images Gallery */}
            {project.images && project.images.length > 0 && (
              <Box>
                <Box
                  bg="gray.100"
                  borderRadius="lg"
                  overflow="hidden"
                  mb={3}
                  maxH="300px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Image
                    src={project.images[activeImageIndex]}
                    alt={`Project preview ${activeImageIndex + 1}`}
                    maxH="300px"
                    objectFit="cover"
                  />
                </Box>
                {project.images.length > 1 && (
                  <SimpleGrid columns={6} spacing={2} mb={3}>
                    {project.images.map((image, index) => (
                      <Box
                        key={index}
                        cursor="pointer"
                        borderRadius="md"
                        overflow="hidden"
                        border={activeImageIndex === index ? '3px solid teal' : '1px solid gray'}
                        onClick={() => setActiveImageIndex(index)}
                        opacity={activeImageIndex === index ? 1 : 0.6}
                        _hover={{ opacity: 1 }}
                        h="50px"
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          h="100%"
                          w="100%"
                          objectFit="cover"
                        />
                      </Box>
                    ))}
                  </SimpleGrid>
                )}
              </Box>
            )}

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
              <Wrap spacing={2}>
                {project.skills.map((skill, index) => (
                  <WrapItem key={index}>
                    <Tag
                      size="md"
                      colorScheme="teal"
                      borderRadius="full"
                      px={3}
                      py={1}
                    >
                      {skill}
                    </Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>

            <Divider />

            {/* Links */}
            <Box>
              <Text fontWeight="bold" color="teal.600" mb={3}>
                Links
              </Text>
              <HStack spacing={4} wrap="wrap">
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
                      leftIcon={<Icon as={FaLinkedin} />}
                      bg="#0A66C2"
                      color="white"
                      variant="solid"
                      size="sm"
                      _hover={{ bg: "#084A96" }}
                    >
                      LinkedIn
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
