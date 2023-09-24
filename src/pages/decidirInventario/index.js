import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../../assets/buttons/styles';

const ChooseStoreScreen = () => {
  const handleChooseChihuahua = () => {
    alert('Seleccionado: Chihuahua');
  };

  const handleChooseCreel = () => {
    alert('Seleccionado: Creel');
  };

  return (
    <View style={[styles.container, { padding: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#E9ECEF' }]}>
      
      <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#2B2B2B', marginBottom: 140, borderBottomWidth: 3, borderBottomColor: '#4A90E2', paddingBottom: 10 }}>
        Elegir Almacén
      </Text>

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: 'transparent', marginBottom: 60, borderColor: '#4A90E2', borderWidth: 2.5, paddingVertical: 25, paddingHorizontal: 50, borderRadius: 35 }]}
        onPress={handleChooseChihuahua}
      >
        <Icon name="store-mall-directory" size={38} color="#4A90E2" style={{ marginRight: 25 }} />
        <Text style={[styles.buttonText, { fontWeight: 'bold', fontSize: 22, color: '#4A90E2' }]}>Chihuahua</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: 'transparent', borderColor: '#8BC34A', borderWidth: 2.5, paddingVertical: 25, paddingHorizontal: 50, borderRadius: 35 }]}
        onPress={handleChooseCreel}
      >
        <Icon name="store" size={38} color="#8BC34A" style={{ marginRight: 25 }} />
        <Text style={[styles.buttonText, { fontWeight: 'bold', fontSize: 22, color: '#8BC34A' }]}>Creel</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default ChooseStoreScreen;
