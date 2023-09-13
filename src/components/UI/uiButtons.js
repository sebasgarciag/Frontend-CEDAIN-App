
//ENTRADAS Y SALIDAS

import React from 'react';
import { View } from 'react-native';
import { Button, IconButton } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
//import { Stack, Button } from "@react-native-material/core"
import buttonStyles from '../../assets/buttons/styles';



const BurgerButton = ({ onPress }) => {
  return (
    <Button style={buttonStyles.menuB}
      onPress={onPress}
      title="menu"
     
      
    />
  );
};

const VolverButton = ({ onPress }) => {
  return (
    <Button style={buttonStyles.volverB}
      onPress={onPress}
      title="Volver"
    />
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

