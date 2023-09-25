import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const ProfileButton = ({ onPress, style }) => {
  <TouchableOpacity style={style} onPress={onPress}>
    <Icon name="person" size={30} color="#333" />
  </TouchableOpacity>
}

export const MenuButton = ({ onPress, style }) => {
  <TouchableOpacity style={style} onPress={onPress}>
    <Icon name="menu" size={30} color="#333" />
  </TouchableOpacity>
}

export const FilterButton = ({ onPress, style }) => {
  <TouchableOpacity style={style} onPress={onPress}>
    <Icon name="filter-list" size={24} color="#5B4C40" />
  </TouchableOpacity>
}

export const ArrowButton = ({ onPress, style }) => {
  <TouchableOpacity style={style} onPress={onPress}>
    <Icon name="arrow-forward-ios" size={24} color="#333" />
  </TouchableOpacity>
}

export const ImportInventoryButton = ({ onPress, style }) => {
  <TouchableOpacity style={style} onPress={onPress}>
    <Icon name="upload-file" size={30} color="#333" />
  </TouchableOpacity>
}

export const EntradaNuevaButton = ({ onPress, style }) => {
  <TouchableOpacity style={[style, { backgroundColor: '#59CD90' }]} onPress={onPress}>
    <Icon name="add-circle-outline" size={24} color="#F1EFE3" />
    <Text>Entrada Nueva</Text>
  </TouchableOpacity>
}

export const SalidaNuevaButton = ({ onPress, style }) => {
  <TouchableOpacity style={[style, { backgroundColor: '#E87461' }]} onPress={onPress}>
    <Icon name="remove-circle-outline" size={24} color="#F1EFE3" />
    <Text>Salida Nueva</Text>
  </TouchableOpacity>
}

