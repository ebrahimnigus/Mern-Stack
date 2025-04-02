import { Container, VStack, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <Container maxW='container-xl' py={12}>
      <VStack spaceY={8}>
        <Text fontSize='30px' fontWeight="bold" bgGradient="to-r" gradientFrom="cyan.400" gradientTo="blue.500" bgClip="text" textAlign="center">
          Current Products 🚀
        </Text>
        <Text fontSize='xl' textAlign={"center"} fontWeight='bold' color='gray.500'>
          No products found 😥 {" "}
          <Link to={'/create'}>
            <Text as='span' color='blue.500' _hover={{ textDecoration:'underline'}}>
              Create a Product
            </Text>
          </Link>
        </Text>
      </VStack>
    </Container>
  )
}

export default HomePage