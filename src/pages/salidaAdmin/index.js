import React from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Text, Spacer, HStack } from "@react-native-material/core";
import { BurgerButton, UserButton, VolverButton,ExportarButton } from '../../components/UI/uiButtons';
import useSalidaAdmin from './useSalidaAdmin';
import InfoSalida from '../../components/UI/infoSalida';
import ProductosSalida from '../../components/UI/productosSalida';


const SalidaAdmin = () => {

    const {salida, datosSalida} = useSalidaAdmin();

    return (
        <>
            <Stack flex={1}>

                <HStack direction='row' justify='center' m={4} style={{justifyContent: 'space-between'}}>
                    <BurgerButton/>
                    <UserButton/>
                </HStack>


                <Stack direction='row' m={5} marginBottom={15} style={{justifyContent: 'space-between', paddingLeft: 5, paddingRight: 5}}>
                    <Text  style={{fontWeight: 'bold', fontSize: 26}}>Salida <Text style={{fontWeight: 'normal', fontSize: 20}}>{salida.folioSerie}</Text></Text>
                    <ExportarButton/>
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

export default SalidaAdmin;