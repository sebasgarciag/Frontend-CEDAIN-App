import React from 'react';
import { View } from 'react-native';
import { Appbar, Searchbar } from 'react-native-paper';

const NavBar = () => {
  return (
    <Appbar.Header style={{ backgroundColor: '#fff' }}>
      {/* Botón de menú */}
      <Appbar.Action
        icon="menu"
        onPress={() => {
          // Acción al presionar el botón de menú
        }}
      />
      
      {/* Barra de búsqueda */}
      <Searchbar
        style={{
          flex: 1,
          marginLeft: 10,
          height: 40,  // Ajuste de altura
          borderRadius: 15,  // Hace las esquinas redondeadas
          paddingVertical: -6  // Ajuste de padding vertical
        }}
        placeholder="Buscar"
      />
  
    </Appbar.Header>
  );
};

export default NavBar;
