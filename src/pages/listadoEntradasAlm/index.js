import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Stack, HStack, Button, Text } from "@react-native-material/core";
import {BurgerButton, UserButton, VolverButton} from '../../components/UI/uiButtons';

const ListadoEntradasAlm = () => {

  return (
    <Stack options={{title: "Listado Entradas Almacenista"}} >

      <HStack>
        <BurgerButton onPress={() => console.log('Burger button')} />
        <UserButton/>
      </HStack>

      <Stack>
        <Text variant="body1">
          Aqui va la lista de entradas...
        </Text>
      </Stack>

      <Stack>
          <VolverButton />
      </Stack>

  </Stack>
    
  );
};

const styles = StyleSheet.create({
  mainScreen: {
    flex: 1,
  },
  bbbburgerButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Align to the start (left)
    width: '100%',
    padding: 10, // Add some padding
  },

});

export default ListadoEntradasAlm;
