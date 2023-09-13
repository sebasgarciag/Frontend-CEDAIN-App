
//ENTRADAS Y SALIDAS

import React from 'react';
import { View } from 'react-native';
import { Button, IconButton } from 'react-native-paper'
//import { Stack, Button } from "@react-native-material/core"
import buttonStyles from '../../assets/buttons/styles';



const BurgerButton = ({ onPress }) => {
  return (
    <View style={buttonStyles.burgerButtonContainer}>
    <IconButton
      icon="dots-horizontal"
      size={30}
      style={buttonStyles.burgerButton}
      onPress={() => console.log('Pressed')}
    />
    </View> 
  );
};

const VolverButton = ({ onPress }) => {
  return (
    <Button 
    style={buttonStyles.volverB}
    mode="contained" 
    onPress={() => console.log('Volver Pressed')}>
    Volver
  </Button>
  );
};

const UserButton = () => {
  return (
    <View style={buttonStyles.userButtonContainer}>
        <IconButton
          icon="account"
          size={30}
          onPress={() => console.log('Pressed')}
        />
    </View>
  );
};

export {BurgerButton, VolverButton, UserButton};

