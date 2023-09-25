import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Button, IconButton } from 'react-native-paper'
import buttonStyles from '../../assets/buttons/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../assets/styles';

const MenuButton = ({ onPress, style }) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Icon name="menu" size={30} color="#333" />
  </TouchableOpacity>
);

const VolverButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.volverButton, { backgroundColor: '#59CD90' }]}>
      <Icon name="arrow-back" size={24} color="#F1EFE3" />
      <Text style={styles.buttonText}>Volver</Text>
    </TouchableOpacity>
  );
};


const ExportarButton = ({ onPress }) => {
    return (
      <TouchableOpacity style={[styles.volverButton, { backgroundColor: '#59CD90' }]}>
      <Icon name="open-in-new" size={24} color="#F1EFE3" />
      <Text style={styles.buttonText}>Exportar</Text>
    </TouchableOpacity>
    );
  };

const ProfileButton = ({ onPress, style }) => (
    <TouchableOpacity style={style} onPress={onPress}>
      <Icon name="person" size={30} color="#333" />
    </TouchableOpacity>
  );


const FilterButton = ({ onPress, style }) => (
    <TouchableOpacity style={style} onPress={onPress}>
      <Icon name="filter-list" size={24} color="#5B4C40" />
    </TouchableOpacity>
  );

const ArrowButton = ({ onPress, style }) => (
    <TouchableOpacity style={style} onPress={onPress}>
      <Icon name="arrow-forward-ios" size={24} color="#333" />
    </TouchableOpacity>
  );

const GenericButton = ({ text, onPress, style, labelStyle, disabled }) => {
    return (
      <Button
        style={style}
        labelStyle={labelStyle}
        mode="contained"
        onPress={onPress}
        disabled={disabled}
      >
        {text}
      </Button>
    );
  };
export {MenuButton, VolverButton, ProfileButton, FilterButton, ArrowButton, ExportarButton, GenericButton};


//nota: Es posible que apliquemos un solo style para todos los botones. por lo pronto, cada uno tiene el suyo.
