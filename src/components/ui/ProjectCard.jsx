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
  Image,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLinkedin } from "react-icons/fa";

const MotionBox = motion(Box);

const ProjectCard = ({ project, onClick, isHighlighted = false }) => {
  const cardBg = isHighlighted ? "yellow.200" : "cyan.300";
  const cardHoverBg = isHighlighted ? "yellow.300" : "cyan.400";
  const borderColor = isHighlighted ? "yellow.500" : "transparent";

  return (
    <MotionBox
      bg={cardBg}
      borderRadius={30}
      p={6}
      border={`3px solid ${borderColor}`}
      boxShadow={isHighlighted 
        ? "0 10px 30px rgba(255,193,7,0.4), 0 0 25px rgba(255,193,7,0.3)" 
        : "0 10px 30px rgba(0,0,0,0.6), 0 0 18px rgba(255,255,255,0.02)"
      }
      cursor="pointer"
      onClick={() => onClick(project)}
      whileHover={{ 
        scale: 1.03, 
        boxShadow: isHighlighted
          ? "0 18px 36px rgba(255,193,7,0.5), 0 0 30px rgba(255,193,7,0.4)"
          : "0 18px 36px rgba(0,0,0,0.7)" 
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}
      minH="280px"
      display="flex"
      flexDirection="column"
      _hover={{ bg: cardHoverBg }}
      position="relative"
    >
      <VStack align="stretch" spacing={4} flex={1}>
        {/* Image Preview */}
        {(project.images?.length > 0 || project.video) && (
          <Box
            bg="gray.200"
            borderRadius="lg"
            overflow="hidden"
            h="120px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {project.images?.length > 0 ? (
              <Image
                src={project.images[0]}
                alt={project.title}
                h="100%"
                w="100%"
                objectFit="cover"
              />
            ) : (
              <Text fontSize="2xl">🎬</Text>
            )}
          </Box>
        )}

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
              as={FaLinkedin} 
              boxSize={5} 
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
