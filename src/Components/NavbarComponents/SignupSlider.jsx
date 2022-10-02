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

export const SignupSlider = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const [formData, setformData] = useState({})

  const handleSignin = (e) => {
    const inputName = e.target.name;
    setformData({ ...formData, [inputName]: e.target.value })  
  }

  const handleSubmit = () => {
    if(formData.email===undefined || formData.password===undefined){
      alert("Fill all Fields")
    }else{
    localStorage.setItem("login",JSON.stringify(formData))   
    alert("SignUp successfully...")  
    }
  }
console.log(formData)
  return (
    <>
      <Button ref={btnRef} colorScheme='teal' width='80%' onClick={onOpen}>
        SignUp
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
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <lebel><Text>Email :</Text></lebel>
            <Box>
              <Input required onChange={handleSignin} name="email" type="email" placeholder='Email' />
            </Box>
            <br />
            <lebel><Text>Password :</Text></lebel>
            <Box>
              <Input onChange={handleSignin} name="password" type="password" placeholder='Password' />
            </Box>
            <br />
            <Box>
              <Button onClick={handleSubmit}>SignUp</Button>
            </Box>
          </DrawerBody>
       
          <DrawerFooter>
            <Text>If Already Have An Account Click  Login</Text>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}