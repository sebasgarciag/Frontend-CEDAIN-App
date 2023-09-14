import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const BotonASC = ({ textoBoton1, textoBoton2, accionBoton1, accionBoton2 }) => {
  return (
    <View style={styles.buttonContainer}>
      <Button mode="contained" onPress={accionBoton1}>
        {textoBoton1}
      </Button>
      <Button mode="contained" onPress={accionBoton2}>
        {textoBoton2}
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    padding: 10,
  },
});

export default BotonASC;

