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
        <SimpleGrid columns={[1, 2, 3]}>
      {
      data.map((el)=>(
              <Box key={el.id}>
                <img src={el.image} alt="" />
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