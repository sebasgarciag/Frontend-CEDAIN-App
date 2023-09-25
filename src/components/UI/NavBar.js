import React from 'react';
import { View, Image } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';
const NavBar = ({ toggleDrawer }) => {
  
  return (
    <Appbar.Header style={{ backgroundColor: '#fff' }}>
      <Appbar.Action
        icon="menu"
        onPress={toggleDrawer}
      />
      
      <Searchbar
        style={{
          flex: 1,
          marginLeft: 5,
          marginRight: 10,
          height: 50,  
          borderRadius: 15,
          backgroundColor: '#D2B48C',

        
        }}
        placeholder="Buscar"
      />
      
      {/* Lugar para el usuario (Imagen) */}
      <Image
        style={{ width: 30, height: 30 }}
        source={{ uri: 'https://assets.stickpng.com/images/585e4beacb11b227491c3399.png' }}
      />
    </Appbar.Header>
  );
};

export default NavBar;
