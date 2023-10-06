import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../assets/buttons/styles';
import { router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { CambiarAlmacenCreel, CambiarAlmacenCuu } from '../../components/UI/uiButtons';


const ChooseStoreScreen = () => {
  
    const navigation = useNavigation(); // Instancia de navegación
  

  return (
    <View style={[styles.container, { padding: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E9ECEF' }]}>
      
      <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#2B2B2B', marginBottom: 140, borderBottomWidth: 3, borderBottomColor: '#4A90E2', paddingBottom: 10 }}>
        Elegir Almacén
      </Text>

      <CambiarAlmacenCreel navigation={navigation} path={"Inventario"}/>

      <CambiarAlmacenCuu navigation={navigation} path={"Inventario"}/>
      
    </View>
  );
};

export default ChooseStoreScreen;
