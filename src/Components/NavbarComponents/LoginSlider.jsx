import React, { useState } from "react"
import {
  Drawer,
  Button,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Text,
  Box,
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
// import Navbar from "../Navbar"

export const LoginSlider = () => {
  const [auth,setAuth] = useState(true)
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const [formData1, setformData1] = useState({})

  const handlesignup = (e) => {
    console.log(e.target.value)
    const inputName1 = e.target.name;
    setformData1({ ...formData1, [inputName1]: e.target.value })
  };

  const handleSubmit1 = () => {
    let data1 = JSON.parse(localStorage.getItem("login"))
    console.log(data1)
    if(data1.email===formData1.email && data1.password===formData1.password){
      alert("Login Success....")
      setAuth(!auth)
      navigate("/healthcare/products")
    }else{
      alert("Try again Later....!!!")
    }
  }
  // function authchange () {
  //   setAuth(!auth)
  // }

  return (
    <>
      <Button colorScheme='teal' width='80%' onClick={onOpen}>
      <Text>Login</Text>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Login to your account</DrawerHeader>

          <DrawerBody>
            <lebel><Text>Email :</Text></lebel>
            <Box>
              <Input required onChange={handlesignup} name="email" type="email" placeholder='Email' />
            </Box>
            <br />
            <lebel><Text>Password :</Text></lebel>
            <Box>
              <Input required onChange={handlesignup} name="password" type="password" placeholder='Password' />
            </Box>
            <br />
            <Box>
              <Button onClick={handleSubmit1}>Login</Button>
            </Box>
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      {/* <Navbar auth={auth}/> */}
    </>
  )
}