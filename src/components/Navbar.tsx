import { HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
      <div>
          <HStack>
              <Image src={logo} boxSize="60px" objectFit="contain" alt="Logo"/>
              <Text>
                  Navbar
              </Text>
          </HStack>
    </div>
  )
}

export default Navbar