import React from 'react';
import { View } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';

const NavBar = () => {
  return (
    <Appbar.Header style={{ backgroundColor: '#fff' }}>
      <Appbar.Action
        icon="menu"
        onPress={() => {
        }}
      />
      <Searchbar
        style={{
          flex: 1,
          marginLeft: 10,
          height: 40,  
          borderRadius: 15,  
          paddingVertical: -6  
        }}
        placeholder="Buscar"
      />
  
    </Appbar.Header>
  );
};

export default NavBar;
