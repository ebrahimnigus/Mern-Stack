import React from "react";
import { Button, Container, Flex, HStack, Text } from "@chakra-ui/react";
import { CiSquarePlus } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useColorMode } from "@/components/ui/color-mode";

const Navbar = () => {
  const { colorMode, toggleColorMode} = useColorMode();
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
            <Button bg="#2d3748" _hover={{ bg:"#4a5568" }} _active={{ bg: "#1f2733"}}>
              <CiSquarePlus fontSize={20} color="white"/>
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? "🌙" : "🌞"}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;

