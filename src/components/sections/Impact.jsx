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
import ImpactCard from "../ui/ImpactCard";
import { impacts } from "../../data/impacts";

const MotionBox = motion(Box);

const Impact = () => {
  return (
    <Box id="impact" py={20} display="flex" justifyContent="center" alignItems="center">
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
              Impact & Achievements
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
              Beyond coding, here are some of the ways I've made an impact in
              the tech community and beyond.
            </Text>
          </MotionBox>

          <SimpleGrid
            columns={{ base: 1, md: 2, lg: 3 }}
            spacing={8}
          >
            {impacts.map((impact, index) => (
              <MotionBox
                key={impact.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ImpactCard impact={impact} />
              </MotionBox>
            ))}
          </SimpleGrid>
        </VStack>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Impact;
