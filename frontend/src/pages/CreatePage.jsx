import { useColorModeValue } from '@/components/ui/color-mode'
import { useProductStore } from '@/store/product';
import { Box, Button, Container, Heading, Input, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Toaster, toaster } from "@/components/ui/toaster"


const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({ name: "", price: "", image: "" });
  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if(!success) {
      toaster.create({
        title: "Error",
        description: message,
        status: "error",
        isClosable: true
      })
    }
    else {
      toaster.create({
        title: "Success",
        description: message,
        status: "success",
        isClosable: true
      })
    }
    setNewProduct({ name:"", price:"", image:"" });
  };

    // Any conditionally rendered content goes here
    return (
      <Container maxW="40rem">
        <VStack spaceY="4">
          <Heading as="h1" size="5xl" fontWeight="bold" textAlign="center" mb="8">
            Create New Product
          </Heading>
          <Box w="full" bg={useColorModeValue("white", "gray.800")} p="6" rounded="lg" shadow="md">
            <VStack spaceY="3">
              <Input
                placeholder="Product Name"
                name="name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                borderColor='#525252'/>
  
              <Input
                placeholder="Price"
                name="price"
                type="number"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
                borderColor='#525252'
              />
  
              <Input
                placeholder="Image URL"
                name="image"
                value={newProduct.image}
                onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
                borderColor='#525252'
              />
  
              <Button bg="#98def5" onClick={handleAddProduct} w="full">
                Add Product
              </Button>
            </VStack>
          </Box>
        </VStack>
      </Container>
    );
  };

export default CreatePage