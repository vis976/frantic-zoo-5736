
import StatisticsAllCatagory from '../Components/AllCategoryComponents/StatisticsAllCatagory'
import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from "../Components/ProductsComponents/ProductCard";
import { SimpleGrid } from '@chakra-ui/react';
const Products = () => {
    const [data,setData] = useState([])
    function healthCareData(){
      return axios.get(`https://pharmeasy-sumangiri.herokuapp.com/products`)
   }
    useEffect(()=>{
     healthCareData().then((res) => setData(res.data)).catch((err) => console.log(err))
    },[])
    console.log(data)
  return (
    <div>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={15} p={10}>
      {/* <Flex
              className="productCards"
             // border="2px solid red"
              marginY="20px"
              flexWrap="wrap"
              // justify="space-between"
              gap="16px"
              textAlign="left"
            > */}
        {
                    data?.map((elem)=>{
                     return    <ProductCard key={elem.id} elem={elem}/>
                    })
                }
                {/* </Flex> */}
      </SimpleGrid>    
      <StatisticsAllCatagory />
    </div>
  )
}

export default Products;