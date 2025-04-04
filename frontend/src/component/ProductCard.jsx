import { useColorModeValue } from '@/components/ui/color-mode';
import { Box, HStack, Heading, IconButton, Image, Text } from '@chakra-ui/react'
import { Edit3, Trash2 } from 'lucide-react';


const ProductCard = ({ product }) => {

    const textColor = useColorModeValue("gray.600", "gray.200");
    const bg = useColorModeValue("white", "gray.800");

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
            <HStack spaceX={2}>
               <Box  bg="blue.200" _hover={{ bg: 'blue.300' }} p='2' colorScheme='blue' rounded='md'><Edit3 color="black" size={24}/></Box>
               <Box  bg="red.200" _hover={{ bg: 'red.300' }} p='2' colorScheme='red' rounded='md'><Trash2 color="black" size={24}/></Box>
            </HStack>
        </Box>
    </Box>
  )

}
export default ProductCard

