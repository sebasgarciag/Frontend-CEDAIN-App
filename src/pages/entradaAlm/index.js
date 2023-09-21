import React from 'react';
import { Stack, Text, HStack } from "@react-native-material/core";
import { MenuButton, ProfileButton, VolverButton } from '../../components/UI/uiButtons';
import InfoEntrada from '../../components/UI/infoEntrada';
import ProductosEntrada from '../../components/UI/productosEntrada';
import styles from '../../assets/styles';
import useEntradaAlm from './useEntradaAlm';

const EntradaAlm = () => {

  const {entrada, datosEntrada} = useEntradaAlm();

    return (
        <>
            <Stack style={styles.container}>
                <HStack style={styles.headerContainer}>
                    <MenuButton onPress={() => { alert('Menú presionado'); }} />
                    <ProfileButton onPress={() => { alert('Perfil presionado'); }} />
                </HStack>


                <Stack style={styles.titulosContainer}>
                    <Text  style={styles.headerText}>Entrada {entrada.idEntrada} </Text>
                    <Text style={styles.headerText}>{entrada.folioSerie}</Text>
                </Stack>        


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