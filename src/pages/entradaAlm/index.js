import React from 'react';
import { View, StyleSheet } from 'react-native';
import {  Stack, Spacer, Divider, Text, HStack } from "@react-native-material/core";
import { BurgerButton, ExportarButton, UserButton, VolverButton } from '../../components/UI/uiButtons';
import useEntradaAdmin from '../entradaAdmin/useEntradaAdmin';
import InfoEntrada from '../../components/UI/infoEntrada';



const EntradaAlm = () => {

  const {entrada, datosEntrada} = useEntradaAdmin();

    return (
        <>
            <Stack options={{ title: "Entrada alamcenista" }} style={{flex: 1}}>
                <HStack direction='row' justify='center' m={4} style={{justifyContent: 'space-between'}}>
                    <BurgerButton/>
                    <UserButton/>
                </HStack>


            <Stack direction='row' m={5} marginBottom={15} style={{justifyContent: 'space-between', paddingRight: 5, paddingLeft: 5}}>
                <Text  style={{fontWeight: 'bold', fontSize: 26}}>Entrada {entrada.idEntrada}</Text>
                <Text style={{fontWeight: 'normal', fontSize: 26}}>{entrada.folioSerie}</Text>
            </Stack>      


            {/* Aqui va componente con informacion de receptor, emisor, comunidad, etc. */}
            <InfoEntrada entrada={entrada}/>






            {/*Boton de volver atras */}
            <Stack style={{alignItems:'baseline', justifyContent: 'flex-end', flex: 1, alignSelf: 'center', marginBottom: 20}}>
                <VolverButton  />
            </Stack>




            </Stack>
        </>

    );
};

const styles = StyleSheet.create({});

export default EntradaAlm;