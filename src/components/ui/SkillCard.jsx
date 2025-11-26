import React from "react";
import { Box, Text, VStack, HStack, Tag, Icon, Wrap, WrapItem } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const SkillCard = ({ category, skills, colorScheme, icon }) => {
  const colors = {
    teal: { bg: "teal.200", hover: "teal.300", heading: "teal.600" },
    cyan: { bg: "cyan.200", hover: "cyan.300", heading: "cyan.600" },
    green: { bg: "green.200", hover: "green.300", heading: "green.600" },
    yellow: { bg: "yellow.200", hover: "yellow.300", heading: "yellow.600" },
  };

  const color = colors[colorScheme] || colors.teal;

  return (
    <MotionBox
      bg={color.bg}
      borderRadius={30}
      p={6}
      boxShadow="0 10px 30px rgba(0,0,0,0.6), 0 0 18px rgba(255,255,255,0.02)"
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 18px 36px rgba(0,0,0,0.7)" 
      }}
      transition={{ duration: 0.2 }}
      _hover={{ bg: color.hover }}
    >
      <VStack align="stretch" spacing={4}>
        <HStack>
          {icon && <Icon as={icon} boxSize={6} color={color.heading} />}
          <Text
            fontSize="lg"
            fontWeight="bold"
            color={color.heading}
          >
            {category}
          </Text>
        </HStack>
        
        <Wrap spacing={2}>
          {skills.map((skill, index) => (
            <WrapItem key={index}>
              <Tag
                size="md"
                colorScheme={colorScheme}
                borderRadius="full"
                px={3}
                py={1}
              >
                {skill}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>
      </VStack>
    </MotionBox>
  );
};

export default SkillCard;
