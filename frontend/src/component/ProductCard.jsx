import { useColorModeValue } from '@/components/ui/color-mode';
import { Box, HStack, Heading, IconButton, Image, Text, VStack, createToaster, useDisclosure } from '@chakra-ui/react'
import { Edit3, Trash2 } from 'lucide-react';
import { Toaster, toaster } from "@/components/ui/toaster"
import { useProductStore } from '@/store/product';
//import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';



const ProductCard = ({ product }) => {

    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");
    const {deleteProduct} = useProductStore();
    const { isOpen, onOpen, onClose } = useDisclosure();

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
  return (
    <Box shadow='lg' rounded='lg' overflow='hidden' transition='all 0.3s' _hover={{ transform: "translateY(-5px)", shadow: 'xl'}} bg={bg}>
        <Image src={product.image} alt={product.name} h={48} w='full' objectFit='cover' />
        <Box p={4}>
            <Heading as='h3' size='md' mb={2}>
                {product.name}
            </Heading>
            <Text fontWeight='bold' fontSize='xl' color={textColor} mb={4}>
                ${product.price}
            </Text>
            <HStack gap={2}>
               <Box  bg="blue.200" _hover={{ bg: 'blue.300' }} p='2'  rounded='md' onClick={onOpen}><Edit3 color="black" size={18}/></Box>
               <Box  bg="red.200" _hover={{ bg: 'red.300' }} p='2' rounded='md' onClick={() =>handleDeleteProduct(product._id)}><Trash2 color="black" size={18}/></Box>
            </HStack>
        </Box>
        {/* <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Update Product</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                <VStack gap="3">
                    <Input
                        placeholder="Product Name"
                        name="name"
                        />
                    <Input
                        placeholder="Price"
                        name="price"
                        type="number"
                        
                    />
                    <Input
                        placeholder="Image URL"
                        name="image"  
                    />
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal> */}
    </Box>
  )

}
export default ProductCard

