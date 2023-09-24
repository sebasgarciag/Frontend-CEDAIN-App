import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Menulateral from '../src/components/UI/MenuLateral'

const salidas = () => {
  return (
    <NavigationContainer independent={true}>
        <Menulateral/>
    </NavigationContainer>

  )
}
export default salidas