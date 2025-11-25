import React from "react";
import {
  Box,
  Heading,
  Text,
  Tag,
  VStack,
  HStack,
  Icon,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const MotionBox = motion(Box);

const ProjectCard = ({ project, onClick }) => {
  return (
    <MotionBox
      bg="cyan.300"
      borderRadius={30}
      p={6}
      boxShadow="5px 5px 10px gray"
      cursor="pointer"
      onClick={() => onClick(project)}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: "8px 8px 15px rgba(0, 0, 0, 0.3)" 
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      minH="280px"
      display="flex"
      flexDirection="column"
      _hover={{ bg: "cyan.400" }}
    >
      <VStack align="stretch" spacing={4} flex={1}>
        <Heading
          size="md"
          bgGradient="linear(to-b, cyan.500, gray.800)"
          bgClip="text"
        >
          {project.title}
        </Heading>
        
        <Text fontSize="sm" color="gray.700" flex={1}>
          {project.description}
        </Text>
        
        <Wrap spacing={2}>
          {project.skills.slice(0, 3).map((skill, index) => (
            <WrapItem key={index}>
              <Tag 
                size="sm" 
                colorScheme="teal" 
                borderRadius="full"
              >
                {skill}
              </Tag>
            </WrapItem>
          ))}
          {project.skills.length > 3 && (
            <WrapItem>
              <Tag size="sm" colorScheme="gray" borderRadius="full">
                +{project.skills.length - 3}
              </Tag>
            </WrapItem>
          )}
        </Wrap>
        
        <HStack spacing={4} pt={2}>
          {project.githubLink && (
            <Icon 
              as={FaGithub} 
              boxSize={5} 
              color="gray.700" 
              _hover={{ color: "gray.900" }}
            />
          )}
          {project.liveLink && (
            <Icon 
              as={FaExternalLinkAlt} 
              boxSize={4} 
              color="gray.700" 
              _hover={{ color: "gray.900" }}
            />
          )}
        </HStack>
      </VStack>
    </MotionBox>
  );
};

export default ProjectCard;
