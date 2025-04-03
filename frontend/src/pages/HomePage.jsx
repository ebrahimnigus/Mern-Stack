import ProductCard from '@/component/ProductCard'
import { useProductStore } from '@/store/product'
import { Container, VStack, Text, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();

  useEffect(() => {
    fetchProducts();
}, [fetchProducts]);
  console.log("products",products);
  return (
    <Container maxW='container-xl' py={12}>
      <VStack spaceY={8}>
        <Text fontSize='30px' fontWeight="bold" bgGradient="to-r" gradientFrom="cyan.400" gradientTo="blue.500" bgClip="text" textAlign="center">
          Current Products 🚀
        </Text>
        <SimpleGrid columns={{ base:1, md:2, lg:3}} spaceX={10} spaceY={10} w={"full"}  >
          {products.map((product) => {
            return <ProductCard key={product._id} product={product} s/>
          })}
        </SimpleGrid>
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