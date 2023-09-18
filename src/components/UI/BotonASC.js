import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const BotonASC = ({ textoBoton1, textoBoton2, accionBoton1, accionBoton2 }) => {
  return (
    <View style={styles2.buttonContainer}>
      <Button 
        mode="contained" 
        onPress={accionBoton1}
        style={{ backgroundColor: '#D2B48C' }}  // Color tierra clara para el fondo
      >
        {textoBoton1}
      </Button>
      <Button 
        mode="contained" 
        onPress={accionBoton2} 
        style={{ backgroundColor: '#D2B48C' }}  // Color tierra clara para el fondo
      >
        {textoBoton2}
      </Button>
    </View>
  );
};

const styles2 = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 65,
    padding: 10,
    margin: 80,

  },
});

export default BotonASC;


