import React, {useState} from 'react';
import { Stack, Text, HStack} from "@react-native-material/core";
import { MenuButton, ProfileButton, VolverButton } from '../../components/UI/uiButtons';
import useSalidaAlm from './useSalidaAlm';
import InfoSalida from '../../components/UI/infoSalida';
import ProductosSalida from '../../components/UI/productosSalida';
import styles from '../../assets/styles';
import Menulateral from '../../components/UI/MenuLateral';
import UserMenu from '../../components/UI/userMenu';

const SalidaAlm = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => {setIsDrawerOpen(!isDrawerOpen);};
    const [isUserDrawerOpen, setIsUserDrawerOpen] = useState(false);
    const toggleUserDrawer = () => {setIsUserDrawerOpen(!isUserDrawerOpen);};

    const {salida, datosSalida, handleCantidad} = useSalidaAlm();

    return (
        <>
            <Stack style={styles.container}>
                <HStack style={styles.headerContainer}>
                    <MenuButton onPress={toggleDrawer} />
                    <ProfileButton onPress={toggleUserDrawer} />
                </HStack>

                <Stack style={styles.titulosContainer}>
                    <Text style={styles.headerText}>Salida {salida.idSalida} </Text>
                    <Text style={styles.headerText}>{salida.folioSerie}</Text>
                </Stack>   

                
                <Menulateral isDrawerOpen={isDrawerOpen}/>
                <UserMenu isDrawerOpen={isUserDrawerOpen}/>     


                {/* Aqui va componente con informacion de receptor, emisor, comunidad, etc. */}
                <InfoSalida salida={salida}/>
                <ProductosSalida datos={datosSalida}/>

                {/*Boton de volver atras */}
                <Stack style={styles.volverContainer}>
                    <VolverButton ruta="/listadoSalidasAlm"/>
                </Stack>


            </Stack>
        </>
    );
};

export default SalidaAlm;