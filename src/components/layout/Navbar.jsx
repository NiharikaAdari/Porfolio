import React from "react";
import {
  Flex,
  Text,
  Spacer,
  Box,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Impact", href: "#impact" },
  { label: "Contact", href: "#contact" },
];

const NavLink = ({ href, children, onClick }) => (
  <Link
    href={href}
    px={4}
    py={2}
    rounded="full"
    bg="yellow.200"
    color="yellow.700"
    fontWeight="semibold"
    fontSize="lg"
    border="3px solid"
    borderColor="yellow.300"
    boxShadow="md"
    _hover={{
      bg: "yellow.300",
      borderColor: "yellow.400",
      transform: "translateY(-2px)",
    }}
    transition="all 0.2s"
    onClick={onClick}
  >
    {children}
  </Link>
);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      const offset = 100; // Offset in pixels for striped background visibility
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth",
      });
    }
    onClose();
  };

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={100}
      bg="gray.800"
      boxShadow="dark-lg"
    >
      <Flex
        as="nav"
        p="10px"
        px={{ base: 4, md: 8 }}
        alignItems="center"
        maxW="1400px"
        mx="auto"
      >
        <Text
          bgGradient="linear(to-br, gray.300, green.200, cyan.300, teal.400)"
          bgClip="text"
          fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
          fontWeight="extrabold"
          cursor="pointer"
          onClick={() => scrollToSection("#hero")}
        >
          Niharika Adari
        </Text>
        
        <Spacer />

        {/* Desktop Navigation */}
        {!isMobile && (
          <HStack spacing={4}>
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
              >
                {item.label}
              </NavLink>
            ))}
          </HStack>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <IconButton
            icon={<HamburgerIcon />}
            onClick={onOpen}
            variant="outline"
            colorScheme="yellow"
            aria-label="Open menu"
          />
        )}
      </Flex>

      {/* Mobile Drawer */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="gray.800">
          <DrawerCloseButton color="white" />
          <DrawerHeader>
            <Text
              bgGradient="linear(to-br, gray.300, green.200, cyan.300, teal.400)"
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
            >
              Navigation
            </Text>
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch" pt={4}>
              {navItems.map((item) => (
                <NavLink
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  {item.label}
                </NavLink>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
