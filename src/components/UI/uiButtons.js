
//ENTRADAS Y SALIDAS

//BURGER BUTTON
import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-material-ui';
import { Stack, Button } from "@react-native-material/core"
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

export {BurgerButton, VolverButton};

