import React from 'react';
import { Appbar, Searchbar } from 'react-native-paper';
const MenuHamburguesa = ({ toggleDrawer }) => {
  
  return (
      <Appbar.Action
        icon="menu"
        onPress={toggleDrawer}
      />
     
    );
};

export default MenuHamburguesa;