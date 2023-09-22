import React from 'react';
import { Stack, Text, HStack } from "@react-native-material/core";
import { MenuButton, ProfileButton, VolverButton,ExportarButton } from '../../components/UI/uiButtons';
import useSalidaAdmin from './useSalidaAdmin';
import InfoSalida from '../../components/UI/infoSalida';
import ProductosSalida from '../../components/UI/productosSalida';
import styles from '../../assets/styles';


const SalidaAdmin = () => {

    const {salida, datosSalida} = useSalidaAdmin();

    return (
        <>
            <Stack style={styles.container}>
                <HStack style={styles.headerContainer}>
                    <MenuButton onPress={() => { alert('Menú presionado'); }} />
                    <ProfileButton onPress={() => { alert('Perfil presionado'); }} />
                </HStack>

                <Stack style={styles.titulosContainer}>
                    <Text  style={styles.headerText}>Salida <Text style={styles.movFolioSerie}>{salida.folioSerie}</Text></Text>
                    <ExportarButton/>
                </Stack>        

                {/* Aqui va componente con informacion de receptor, emisor, comunidad, etc. */}
                <InfoSalida salida={salida}/>
                <ProductosSalida datos={datosSalida}/>

                {/*Boton de volver atras */}
                <Stack style={styles.volverContainer}>
                    <VolverButton />
                </Stack>
            </Stack>
        </>
    );
};

export default SalidaAdmin;