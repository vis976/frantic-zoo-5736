import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { healthCareData } from '../../api'

export const HealthCare = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
     healthCareData().then((res) => setData(res.data)).catch((err) => console.log(err))
    },[])
    console.log(data)
  return (
    <div>
        <SimpleGrid columns={[1, 2, 3]} p="2rem" spacing='1rem'>
      {
      data.map((el)=>(
              <Box key={el.id} border="1px solid black" w="80%" p="1rem" h="auto">
                <img height={"150px"} width='80%' src={el.image} alt="" />
                <Text>{el.title}</Text>
                <Text>₹ {el.price}</Text>
            </Box>
      ))
}
</SimpleGrid>
    </div>
  )
}

export default HealthCare;