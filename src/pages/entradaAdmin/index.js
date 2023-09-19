import React from 'react';
import { View, StyleSheet } from 'react-native';
import {  Stack, Spacer, Divider, Text, HStack } from "@react-native-material/core";

import { BurgerButton, ExportarButton, UserButton, VolverButton } from '../../components/UI/uiButtons';

const EntradaAdmin = () => {
  return (
    <>
        <Stack options={{ title: "Entrada administrador" }} style={{flex: 1}}>
          <HStack direction='row' justify='center' m={4} style={{justifyContent: 'space-between'}}>
              <BurgerButton/>
              <UserButton/>
          </HStack>


            <Stack direction='row' style={{justifyContent: 'space-between'}} >

                <Text variant='h5' >Entrada admin</Text>
                <Text variant='h6' >folio?</Text>
                <ExportarButton />
    
             </Stack>        


           {/* Aqui va componente con informacion de receptor, emisor, comunidad, etc. */}
                





            {/*Boton de volver atras */}
            <Stack style={{alignItems:'baseline', justifyContent: 'flex-end', flex: 1, alignSelf: 'center', marginBottom: 20}}>
                <VolverButton  />
            </Stack>


        </Stack>
    </>
   
  );
};

const styles = StyleSheet.create({});

export default EntradaAdmin;
