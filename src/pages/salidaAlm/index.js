import React from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Text, Spacer, HStack } from "@react-native-material/core";
import { BurgerButton, UserButton, VolverButton } from '../../components/UI/uiButtons';
import useSalidaAlm from './useSalidaAlm';
import InfoSalida from '../../components/UI/infoSalida';



const SalidaAlm = () => {

    const {salida, datosSalida} = useSalidaAlm();

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

                {/*Boton de volver atras */}
                <Stack style={{ alignItems: 'baseline', justifyContent: 'flex-end', flex: 1, alignSelf: 'center', marginBottom: 20 }}>
                    <VolverButton />
                </Stack>

            </Stack>
        </>
    );
};

const styles = StyleSheet.create({});

export default SalidaAlm;