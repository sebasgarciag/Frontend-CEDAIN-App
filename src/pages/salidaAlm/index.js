import React from 'react';
import { StyleSheet, ScrollView, TextInput } from 'react-native';
import { Stack, Text, Spacer, HStack, Box } from "@react-native-material/core";
import { BurgerButton, UserButton, VolverButton } from '../../components/UI/uiButtons';
import { Surface } from 'react-native-paper';
import useSalidaAlm from './useSalidaAlm';
import InfoSalida from '../../components/UI/infoSalida';
import ProductosSalida from '../../components/UI/productosSalida';



const SalidaAlm = () => {

    const {salida, datosSalida, handleCantidad} = useSalidaAlm();

    return (
        <>
            <Stack flex={1}>

                <HStack direction='row' justify='center' m={4} style={{justifyContent: 'space-between'}}>
                    <BurgerButton/>
                    <UserButton/>
                </HStack>


                <Stack direction='row' m={5} marginBottom={15} style={{justifyContent: 'space-between', paddingRight: 5, paddingLeft: 5}}>
                    <Text  style={{fontWeight: 'bold', fontSize: 26}}>Salida {salida.idSalida}</Text>
                    <Text style={{fontWeight: 'normal', fontSize: 26}}>{salida.folioSerie}</Text>
                </Stack>

                <InfoSalida salida={salida}/>
               
                <ProductosSalida datos={datosSalida}/>
                       
       
       

                {/*Boton de volver atras */}
                <Stack direction='row' justify='center' margin={10}>
                    <VolverButton />
                </Stack>

            </Stack>
        </>
    );
};

const styles = StyleSheet.create({});

export default SalidaAlm;