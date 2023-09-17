import React from 'react';
import { View, StyleSheet } from 'react-native';
import {  Stack, Spacer, Divider, Text } from "@react-native-material/core";

import { BurgerButton, ExportarButton, UserButton, VolverButton } from '../../components/UI/uiButtons';

const EntradaAdmin = () => {
  return (
    <>
        <Stack options={{ title: "Entrada administrador" }} style={{flex: 1}}>
            <View>

                <Text>Boton de menu y usuario</Text>

            </View>


            <Stack direction='row' style={{justifyContent: 'space-between'}} >

                <Text variant='h5' >Entrada</Text>
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
