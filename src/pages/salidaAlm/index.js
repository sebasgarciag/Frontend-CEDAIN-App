import React from 'react';
import { Stack, Text} from "@react-native-material/core";
import {VolverButtonN } from '../../components/UI/uiButtons';
import useSalidaAlm from './useSalidaAlm';
import InfoSalida from '../../components/UI/infoSalida';
import ProductosSalida from '../../components/UI/productosSalida';
import styles from '../../assets/styles';
import { useNavigation } from '@react-navigation/native';

const SalidaAlm = () => {


    const {salida, datosSalida, handleCantidad} = useSalidaAlm();
    const navigation = useNavigation();

    return (
        <>
            <Stack style={styles.container}>

                <Stack style={styles.titulosContainer}>
                    <Text style={styles.headerText}>Salida {salida.idSalida} </Text>
                    <Text style={styles.headerText}>{salida.folioSerie}</Text>
                </Stack>      

                {/* Aqui va componente con informacion de receptor, emisor, comunidad, etc. */}
                <InfoSalida salida={salida}/>
                <ProductosSalida datos={datosSalida}/>

                {/*Boton de volver atras */}
                <Stack style={styles.volverContainer}>
                    <VolverButtonN navigation={navigation} path={'Salidas'}/>
                </Stack>


            </Stack>
        </>
    );
};

export default SalidaAlm;