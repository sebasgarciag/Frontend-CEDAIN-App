import React, { useEffect } from 'react';
import { Stack, Text} from "@react-native-material/core";
import {VolverButtonN } from '../../components/UI/uiButtons';
import useSalidaAlm from './useSalidaAlm';
import InfoSalida from '../../components/UI/infoSalida';
import ProductosSalida from '../../components/UI/productosSalida';
import styles from '../../assets/styles';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const SalidaAlm = ( {salida} ) => {


    const {datosSalida, getDetallesSalida} = useSalidaAlm();

    useEffect(() => {
        if(salida?.id_salida) {
            getDetallesSalida(salida.id_salida);
        }
    }, [salida?.id_salida]);

    const navigation = useNavigation();

    return (
        <>
            <Stack style={styles.container}>

                <Stack style={styles.titulosContainer}>
                    <Text style={styles.headerText}>Salida {salida.id_salida} </Text>
                    <Text style={styles.headerText}>{salida.folio + salida.serie}</Text>
                </Stack>      

                {/* Aqui va componente con informacion de receptor, emisor, comunidad, etc. */}
                <InfoSalida salida={salida}/>
                <ScrollView >
                    {datosSalida.map((datoSalida) => 
                        <ProductosSalida salidaDetalle={datoSalida} key={datoSalida.id_salida}/>
                    )}
            </ScrollView>
                {/*Boton de volver atras */}
                <Stack style={styles.volverContainer}>
                    <VolverButtonN navigation={navigation} path={'Salidas'}/>
                </Stack>

            </Stack>
        </>
    );
};

export default SalidaAlm;