import React from 'react';
import { View, Image } from 'react-native';
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
          marginLeft: 5,
          marginRight: 10,
          height: 50,  // Ajuste de altura
          borderRadius: 15,  // Hace las esquinas redondeadas

        
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
