import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import Menulateral from '../src/components/UI/MenuLateral'


const Home = () => { 
    return (
        <NavigationContainer independent={true}>
            <Menulateral/>
        </NavigationContainer>
    
      )
    }

export default Home;
