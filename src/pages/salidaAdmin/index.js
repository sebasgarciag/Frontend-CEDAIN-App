import React from 'react';
import { Stack, Text} from "@react-native-material/core";
import { ExportarButton, VolverButtonNDirect } from '../../components/UI/uiButtons';
import useSalidaAdmin from './useSalidaAdmin';
import InfoSalida from '../../components/UI/infoSalida';
import ProductosSalida from '../../components/UI/productosSalida';
import styles from '../../assets/styles';
import { useNavigation } from '@react-navigation/native';



const SalidaAdmin = () => {

    const navigation = useNavigation();

    const {salida, datosSalida} = useSalidaAdmin();

    return (
        <>
            <Stack style={styles.container}>

                <Stack style={styles.titulosContainer}>
                    <Text  style={styles.headerText}>Salida <Text style={styles.movFolioSerie}>{salida.folioSerie}</Text></Text>
                    <ExportarButton/>
                </Stack>         

                {/* Aqui va componente con informacion de receptor, emisor, comunidad, etc. */}
                <InfoSalida salida={salida}/>
                <ProductosSalida datos={datosSalida}/>

                {/*Boton de volver atras */}
                <Stack style={styles.volverContainer}>
                    <VolverButtonNDirect navigation={navigation}/>
                </Stack>
            </Stack>
        </>
    );
};

export default SalidaAdmin;