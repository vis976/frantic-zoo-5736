import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import AllCatagorymenu from '../Components/AllCategoryComponents/AllCatagorymenu'
import AllCatagoryDescription from '../Components/AllCategoryComponents/AllCategoryDescription'
import AllCatagoryCarousel from '../Components/AllCategoryComponents/AllCatagoryCarousel'

export const AllCategory = () => {
  return (
    <Box>
      <Box
      //  border={"1px solid red"}
      w="1024px"
      margin="auto"
      //  overflow="hidden"
      >
        <Center   my="30px">
          <AllCatagoryCarousel />
        </Center>
          <AllCatagorymenu />
          <AllCatagoryDescription />
      </Box>
    </Box>
  )
}
