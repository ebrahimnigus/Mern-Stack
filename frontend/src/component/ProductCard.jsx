import { useColorModeValue } from '@/components/ui/color-mode';
import { Box, Button, HStack, Heading, IconButton, Image, Input, Text, VStack } from '@chakra-ui/react'
import { Edit3, Trash2 } from 'lucide-react';
import { Toaster, toaster } from "@/components/ui/toaster"
import { useProductStore } from '@/store/product';
import { useState } from 'react';



const ProductCard = ({ product }) => {
    const [updatedProduct, setUpdatedProduct] = useState(product);
    const [isOpen, setIsOpen] = useState(false);
    

    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");
    
    const buttonBg = useColorModeValue("gray.200", "#2d3748");
    const buttonHoverBg = useColorModeValue("gray.300", "#4a5568");
    const buttonActiveBg = useColorModeValue("gray.400", "#1f2733");

    const { deleteProduct, updateProduct } = useProductStore();

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    const handleDeleteProduct = async (pid) => {
        const {success,message} = await deleteProduct(pid)
        if(!success){
            toaster.create({
                title: 'Error',
                description: message,
                status: 'error',
                duration: 3000,
                isClosable: true,
            })
        }
        else {
            toaster.create({
                title: 'Success',
                description: message,
                status: 'success',
                duration: 3000,
                isClosable: true,
            })
        }
    }

    const handleUpdateProduct = async (pid, updatedProduct) => {
      const {success, message} = await updateProduct(pid, updatedProduct);
      closeModal();
      if(!success){
        toaster.create({
            title: 'Error',
            description: message,
            status: 'error',
            duration: 3000,
            isClosable: true,
        })
    }
    else {
        toaster.create({
            title: 'Success',
            description: message,
            status: 'success',
            duration: 3000,
            isClosable: true,
        })
    }
    }

   
//   transition='all 0.3s' _hover={{ transform: "translateY(-5px)", shadow: 'xl'}}
  return (
    <Box shadow='lg' rounded='lg' overflow='hidden' bg={bg}> 
        <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />
        <Box p={4}>
            <Heading as='h3' size='md' mb={2}>
                {product.name}
            </Heading>
            <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                ${product.price}
            </Text>
            <HStack gap={2}>
               <Box  bg="blue.200" _hover={{ bg: 'blue.300' }} p='2'  rounded='md' onClick={openModal}><Edit3 color="black" size={18}/></Box>
               <Box  bg="red.200" _hover={{ bg: 'red.300' }} p='2' rounded='md' onClick={() =>handleDeleteProduct(product._id)}><Trash2 color="black" size={18}/></Box>
            </HStack>
        </Box>


        {/* Modal Overlay and Modal */}
      {isOpen && (
        <>
          {/* Overlay */}
          <Box
            position="fixed"
            top={0}
            left={0}
            width="100%"
            height="100%"
            bg="rgba(0, 0, 0, 0.5)"
            zIndex={999} // Overlay stays behind modal
            onClick={closeModal}
          />

          {/* Modal */}
          <Box
            position="fixed"
            top="50%"
            left="50%"
            transform="translate(-50%, -80%)" // Centers the modal
            bg={bg}
            p="6"
            rounded="lg"
            shadow="md"
            zIndex={1000} // Modal stays above overlay
            width="80%"
            maxWidth="500px"
          >
            <VStack gap="3">
              <Heading as="h2" size="lg" fontWeight="bold" textAlign="center" mb="6">
                Update Product
              </Heading>
              <Input
                placeholder="Product Name"
                name="name"
                value={updatedProduct.name}
                borderColor="#525252"
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value})}
              />
              <Input
                placeholder="Price"
                name="price"
                type="number"
                value={updatedProduct.price}
                borderColor="#525252"
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value})}
              />
              <Input
                placeholder="Image URL"
                name="image"
                value={updatedProduct.image}
                borderColor="#525252"
                onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value})}
              />
              <HStack w="full" mt="4" justifyContent="flex-end" gap={2}>
                <Button bg="#98def5" mr={3} onClick={()=> handleUpdateProduct(product._id, updatedProduct)} >
                    Update
                </Button>
                <Button variant="ghost" bg={buttonBg} _hover= {{ bg:buttonHoverBg}} _active={{ bg: buttonHoverBg}} onClick={closeModal}>
                    Cancel
                </Button>
              </HStack>
            </VStack>
          </Box>
        </>
      )}
    </Box>
  )

}
export default ProductCard

