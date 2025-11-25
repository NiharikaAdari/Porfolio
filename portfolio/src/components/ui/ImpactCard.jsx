import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  Icon,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const MotionBox = motion(Box);

const ImpactCard = ({ impact }) => {
  return (
    <MotionBox
      bg="teal.200"
      borderRadius={30}
      p={6}
      boxShadow="5px 5px 10px gray"
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.3)" 
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
        
        {/* Image placeholder */}
        {impact.image && (
          <Box
            bg="gray.200"
            borderRadius="md"
            h="100px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Text color="gray.500" fontSize="sm">
              🖼️ Image
            </Text>
          </Box>
        )}
        
        <Text fontSize="sm" color="gray.700" flex={1}>
          {impact.description}
        </Text>
        
        {impact.link && (
          <Link 
            href={impact.link} 
            isExternal 
            color="teal.600"
            fontSize="sm"
            fontWeight="medium"
            _hover={{ color: "teal.800", textDecor: "underline" }}
          >
            Learn More <Icon as={FaExternalLinkAlt} ml={1} boxSize={3} />
          </Link>
        )}
      </VStack>
    </MotionBox>
  );
};

export default ImpactCard;
