import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Button, IconButton } from 'react-native-paper'
import buttonStyles from '../../assets/buttons/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import styles from '../../assets/styles';
import { router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';

const MenuButton = ({ onPress, style }) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Icon name="menu" size={30} color="#333" />
  </TouchableOpacity>
);

const VolverButton = ({ path }) => {
  return (
    <TouchableOpacity style={[styles.volverButton, { backgroundColor: '#59CD90' }]} onPress={() => router.replace(`/${path}`)}>
      <Icon name="arrow-back" size={24} color="#F1EFE3" />
      <Text style={styles.buttonText}>Volver</Text>
    </TouchableOpacity>
  );
};

const VolverButtonN = ({navigation, path}) => {

  return (
    <TouchableOpacity style={[styles.volverButton, { backgroundColor: '#8F8B36' }]} 
      onPress={() => {
      navigation.navigate(`${path}`);
      }}>
    <Icon2 name="left" size={24} color="#F1EFE3" />
    <Text style={styles.buttonText}>Volver</Text>
  </TouchableOpacity>
  );
}

const SiguienteButtonN = ({navigation, path}) => {

  return (
    <TouchableOpacity style={[styles.volverButton, { backgroundColor: '#8F8B36' }]} 
      onPress={() => {
      navigation.navigate(`${path}`);
      }}>
    <Text style={styles.buttonText}>Siguiente</Text>
    <Icon2 name="right" size={24} color="#F1EFE3" />
  </TouchableOpacity>
  );
}

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

export {MenuButton, VolverButton, ProfileButton, FilterButton, ArrowButton, ExportarButton, VolverButtonN, SiguienteButtonN};


//nota: Es posible que apliquemos un solo style para todos los botones. por lo pronto, cada uno tiene el suyo.
