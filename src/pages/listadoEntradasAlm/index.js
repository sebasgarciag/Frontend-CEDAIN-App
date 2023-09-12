import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Icon } from 'react-native-material-ui';
import {Stack} from "expo-router";
import BurgerButton from '../../components/uiComponents';
const ListadoEntradasAlm = () => {
  return (
    <>
      <Stack.Screen  options={{title: "Listado Entradas Almacenista"}} />
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button raised primary text="Volver" />
          <BurgerButton onPress={() => console.log('Burger button')} />
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
