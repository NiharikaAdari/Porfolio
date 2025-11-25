import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaCode, FaLayerGroup, FaTools, FaChartBar } from "react-icons/fa";
import SkillCard from "../ui/SkillCard";
import { skills } from "../../data/skills";

const MotionBox = motion(Box);

const categoryConfig = {
  "Programming Languages": { colorScheme: "teal", icon: FaCode },
  "Libraries/Frameworks": { colorScheme: "cyan", icon: FaLayerGroup },
  "Tools/Platforms": { colorScheme: "green", icon: FaTools },
  "Data Science": { colorScheme: "yellow", icon: FaChartBar },
};

const TechnicalSkills = () => {
  const categories = Object.keys(skills);

  return (
    <Box id="skills" py={20}>
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
              Technical Skills
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
              A comprehensive overview of my technical expertise across
              different domains and technologies.
            </Text>
          </MotionBox>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {categories.map((category, index) => (
              <MotionBox
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <SkillCard
                  category={category}
                  skills={skills[category]}
                  colorScheme={categoryConfig[category]?.colorScheme || "teal"}
                  icon={categoryConfig[category]?.icon}
                />
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
};

export default TechnicalSkills;
