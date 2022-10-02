import { Box } from '@chakra-ui/react'
import React from 'react'
import AllCatagorymenu from '../Components/AllCategory.jsx/AllCatagorymenu'
import AllCatagoryDescription from '../Components/AllCategory.jsx/AllCategoryDescription'

export const AllCategory = () => {
  return (
    <Box>
      <Box
      //  border={"1px solid red"}
      w="1024px"
      margin="auto"
      //  overflow="hidden"
      >
        {/* <Center   my="30px">
          <AllCatagoryCarousel/>
        </Center> */}
          <AllCatagorymenu />
          <AllCatagoryDescription />
      </Box>
    </Box>
  )
}
