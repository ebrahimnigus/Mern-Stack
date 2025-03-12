import React from "react";
import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useColorMode, useColorModeValue } from "@/components/ui/color-mode";


const Navbar = () => {
  const { colorMode, toggleColorMode} = useColorMode();

  const textColor = useColorModeValue("black", "white")
  const buttonBg = useColorModeValue("gray.200", "#2d3748");
  const buttonHoverBg = useColorModeValue("gray.300", "#4a5568");
  const buttonActiveBg = useColorModeValue("gray.400", "#1f2733");
  return (
    <Container maxW={"1140px"} px={4} >
      <Flex 
        h={16} 
        alignItems={"center"} 
        justifyContent={"space-between"} 
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text 
          fontSize={{ base: 22, sm: 28 }}
          fontWeight={"bold"} 
          textTransform={"uppercase"} 
          textAlign={"center"} 
          bgGradient="to-r" gradientFrom="cyan.400" gradientTo="blue.500"
          bgClip="text"
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
        
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button bg={buttonBg} _hover={{ bg: buttonHoverBg }} _active={{ bg: buttonActiveBg }}>
              <CiSquarePlus fontSize={20} color={textColor} style={{ fontWeight: "bold", strokeWidth: 0.75}}/>
            </Button>
          </Link>
          <Button onClick={toggleColorMode} bg={buttonBg} _hover={{ bg: buttonHoverBg }}>
            <Text fontSize={20}>{colorMode === "light" ? "🌙" : "🌞"}</Text>
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;

