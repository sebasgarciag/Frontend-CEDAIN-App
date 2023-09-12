import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-material-ui';
import {Stack} from "expo-router";

const ListadoEntradasAlm = () => {
  return (
    <>
      <Stack.Screen  options={{title: "Listado Entradas Almacenista"}} />
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button raised primary text="Volver" />
        </View>
      </View>
    </>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default ListadoEntradasAlm;
