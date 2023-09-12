//BURGER BUTTONS
import React from 'react';
import { View } from 'react-native';
import { Icon, Button } from 'react-native-material-ui';

const BurgerButton = ({ onPress }) => {
  return (
    <Button
      onPress={onPress}
      icon={<Icon name="menu" />}
      style={{ container: { backgroundColor: 'transparent' } }}
    />
  );
};

export default BurgerButton;
