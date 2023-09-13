import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

const BotonASC = () => {
  return (
      <View style={styles.buttonContainer}>
        <Button mode="contained" onPress={() => {}}>
          Cancelar
        </Button>
        <Button mode="contained" onPress={() => {}}>
          Siguiente
        </Button>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  content: {
    flex: 1,
    // Otros estilos para el contenido
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    padding: 10,
  },
});


export default BotonASC;
