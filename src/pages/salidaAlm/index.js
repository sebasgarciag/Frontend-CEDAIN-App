import React from 'react';
import { Stack, Text, HStack} from "@react-native-material/core";
import { MenuButton, ProfileButton, VolverButton } from '../../components/UI/uiButtons';
import useSalidaAlm from './useSalidaAlm';
import InfoSalida from '../../components/UI/infoSalida';
import ProductosSalida from '../../components/UI/productosSalida';
import styles from '../../assets/styles';


const SalidaAlm = () => {

    const {salida, datosSalida, handleCantidad} = useSalidaAlm();

    return (
        <>
            <Stack style={styles.container}>
                <HStack style={styles.headerContainer}>
                    <MenuButton onPress={() => { alert('Menú presionado'); }} />
                    <ProfileButton onPress={() => { alert('Perfil presionado'); }} />
                </HStack>


                <Stack style={styles.titulosContainer}>
                    <Text style={styles.headerText}>Salida {salida.idSalida} </Text>
                    <Text style={styles.headerText}>{salida.folioSerie}</Text>
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

export default SalidaAlm;