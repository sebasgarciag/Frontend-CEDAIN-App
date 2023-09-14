import React from 'react';
import { View } from 'react-native';
import { Button, IconButton } from 'react-native-paper'
import buttonStyles from '../../assets/buttons/styles';

const BurgerButton = ({ onPress }) => {
  return (
    <IconButton
      icon="dots-horizontal"
      size={30}
      style={buttonStyles.burgerButton}
      onPress={() => console.log('Pressed')}
    />
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
      <IconButton
        icon="account"
        size={30}
        style={buttonStyles.userButton}
        onPress={() => console.log('Pressed')}
      />
  );
};

const FiltrosButton = ({ onPress }) => {
    return (
      <Button 
      style={buttonStyles.filtrosB}
      mode="contained" 
      onPress={() => console.log('Filtros Button')}>
      Filtros
    </Button>
    );
  };

export {BurgerButton, VolverButton, UserButton, FiltrosButton};

