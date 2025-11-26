import React, { useState } from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  HStack,
  Link,
  Icon,
  Image,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const MotionBox = motion(Box);

const ImpactCard = ({ impact }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <MotionBox
      bg="teal.200"
      borderRadius={30}
      p={6}
      boxShadow="0 10px 30px rgba(0,0,0,0.6), 0 0 18px rgba(255,255,255,0.02)"
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "0 18px 36px rgba(0,0,0,0.7)" 
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      minH="220px"
      display="flex"
      flexDirection="column"
      _hover={{ bg: "teal.300" }}
    >
      <VStack align="stretch" spacing={4} flex={1}>
        <Heading
          size="md"
          bgGradient="linear(to-b, teal.500, gray.800)"
          bgClip="text"
        >
          {impact.title}
        </Heading>
        
        {/* Image Gallery */}
        {impact.images && impact.images.length > 0 && (
          <Box>
            <Image
              src={impact.images[activeImageIndex]}
              alt={`${impact.title} image ${activeImageIndex + 1}`}
              borderRadius="md"
              maxH="150px"
              w="100%"
              objectFit="cover"
              cursor="pointer"
              onClick={onOpen}
              _hover={{ opacity: 0.8 }}
            />
            {impact.images.length > 1 && (
              <SimpleGrid columns={4} spacing={2} mt={2}>
                {impact.images.map((img, idx) => (
                  <Box
                    key={idx}
                    as="button"
                    cursor="pointer"
                    borderRadius="md"
                    overflow="hidden"
                    border={activeImageIndex === idx ? "2px solid teal" : "1px solid gray"}
                    p={0}
                    onClick={() => setActiveImageIndex(idx)}
                    _hover={{ borderColor: "teal" }}
                  >
                    <Image
                      src={img}
                      alt={`thumbnail ${idx + 1}`}
                      h="60px"
                      w="100%"
                      objectFit="cover"
                    />
                  </Box>
                ))}
              </SimpleGrid>
            )}
          </Box>
        )}
        
        <Text fontSize="sm" color="gray.700" flex={1}>
          {impact.description}
        </Text>
        
        {impact.links && impact.links.length > 0 ? (
          <HStack spacing={3} wrap="wrap">
            {impact.links.map((linkItem, idx) => (
              <Link 
                key={idx}
                href={linkItem.url} 
                isExternal 
                color="teal.600"
                fontSize="sm"
                fontWeight="medium"
                _hover={{ color: "teal.800", textDecor: "underline" }}
              >
                {linkItem.label} <Icon as={FaExternalLinkAlt} ml={1} boxSize={3} />
              </Link>
            ))}
          </HStack>
        ) : impact.link && (
          <Link 
            href={impact.link} 
            isExternal 
            color="teal.600"
            fontSize="sm"
            fontWeight="medium"
            _hover={{ color: "teal.800", textDecor: "underline" }}
          >
            {impact.linkLabel || "Learn More"} <Icon as={FaExternalLinkAlt} ml={1} boxSize={3} />
          </Link>
        )}
      </VStack>

      {/* Image Preview Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
        <ModalOverlay bg="blackAlpha.600" />
        <ModalContent bg="white" borderRadius="lg" maxH="90vh" overflow="auto">
          <ModalCloseButton />
          <Box p={6} display="flex" justifyContent="center" alignItems="center">
            <Image
              src={impact.images[activeImageIndex]}
              alt={`${impact.title} full preview`}
              maxW="100%"
              maxH="80vh"
              objectFit="contain"
            />
          </Box>
        </ModalContent>
      </Modal>
    </MotionBox>
  );
};

export default ImpactCard;
