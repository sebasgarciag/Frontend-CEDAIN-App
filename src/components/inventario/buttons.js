import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';


export const ProfileButton = ({ onPress, style }) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Icon name="person" size={30} color="#333" />
  </TouchableOpacity>
)

export const MenuButton = ({ onPress, style }) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Icon name="menu" size={30} color="#333" />
  </TouchableOpacity>
)

export const FilterButton = ({ onPress, style }) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Icon name="filter-list" size={24} color="#5B4C40" />
  </TouchableOpacity>
)

const ArrowButton = ({navigation, path, nombre, cantidad}) => {

  return(
  <TouchableOpacity 
      onPress={() => {
      navigation.navigate(`${path}`,  nombre, cantidad);
      }}>
      <Icon name="arrow-forward-ios" size={24} color="#333" />
  </TouchableOpacity>
  );
};

const ArrowButtonAlmacen = ({navigation, path, almacen}) => {

  return(
  <TouchableOpacity 
      onPress={() => {
      navigation.navigate(`${path}`, almacen);
      }}>
      <Icon name="arrow-forward-ios" size={24} color="#333" />
  </TouchableOpacity>
  );
};


export const ImportInventoryButton = ({ onPress, style }) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Icon name="upload-file" size={30} color="#333" />
  </TouchableOpacity>
)

export {ArrowButton, ArrowButtonAlmacen};