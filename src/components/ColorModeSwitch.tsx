import { HStack, Switch, useColorMode,Text } from '@chakra-ui/react'
import React from 'react'

const ColorModeSwitch = () => {
   const {toggleColorMode, colorMode} = useColorMode();
  return (
      <div>
          <HStack>
              <Switch isChecked={ colorMode === 'dark'} onChange={toggleColorMode} />
              <Text>{ colorMode ==='dark'? 'Light Mode' : 'Dark Mode'}</Text>
          </HStack>
    </div>
  )
}

export default ColorModeSwitch