import React, {useState} from 'react';
import { Stack, Text, HStack } from "@react-native-material/core";
import { MenuButton, ProfileButton, VolverButton } from '../../components/UI/uiButtons';
import InfoEntrada from '../../components/UI/infoEntrada';
import ProductosEntrada from '../../components/UI/productosEntrada';
import styles from '../../assets/styles';
import useEntradaAlm from './useEntradaAlm';
import Menulateral from '../../components/UI/MenuLateral';
import UserMenu from '../../components/UI/userMenu';

const EntradaAlm = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {setIsDrawerOpen(!isDrawerOpen);};
  const [isUserDrawerOpen, setIsUserDrawerOpen] = useState(false);
  const toggleUserDrawer = () => {setIsUserDrawerOpen(!isUserDrawerOpen);};

  const {entrada, datosEntrada} = useEntradaAlm();

    return (
        <>
            <Stack style={styles.container}>
                <HStack style={styles.headerContainer}>
                    <MenuButton onPress={toggleDrawer} />
                    <ProfileButton onPress={toggleUserDrawer} />
                </HStack>

                <Stack style={styles.titulosContainer}>
                    <Text  style={styles.headerText}>Entrada {entrada.idEntrada} </Text>
                    <Text style={styles.headerText}>{entrada.folioSerie}</Text>
                </Stack>      

                <Menulateral isDrawerOpen={isDrawerOpen}/>
                <UserMenu isDrawerOpen={isUserDrawerOpen}/>  


                {/* Aqui va componente con informacion de receptor, emisor, comunidad, etc. */}
                <InfoEntrada entrada={entrada}/>
                <ProductosEntrada datos={datosEntrada}/>

                {/*Boton de volver atras */}
                <Stack style={styles.volverContainer}>
                    <VolverButton />
                </Stack>
            </Stack>
        </>

    );
};

export default EntradaAlm;