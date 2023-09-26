import React, {useState} from 'react';
import { Stack, Text} from "@react-native-material/core";
import { VolverButtonN } from '../../components/UI/uiButtons';
import InfoEntrada from '../../components/UI/infoEntrada';
import ProductosEntrada from '../../components/UI/productosEntrada';
import styles from '../../assets/styles';
import useEntradaAlm from './useEntradaAlm';
import { useNavigation } from '@react-navigation/native';

const EntradaAlm = () => {

  const {entrada, datosEntrada} = useEntradaAlm();
  const navigation = useNavigation();

    return (
        <>
            <Stack style={styles.container}>

                <Stack style={styles.titulosContainer}>
                    <Text  style={styles.headerText}>Entrada {entrada.idEntrada} </Text>
                    <Text style={styles.headerText}>{entrada.folioSerie}</Text>
                </Stack>      

                {/* Aqui va componente con informacion de receptor, emisor, comunidad, etc. */}
                <InfoEntrada entrada={entrada}/>
                <ProductosEntrada datos={datosEntrada}/>

                {/*Boton de volver atras */}
                <Stack style={styles.volverContainer}>
                    <VolverButtonN navigation={navigation} path={'Entradas'}/>
                </Stack>
            </Stack>
        </>

    );
};

export default EntradaAlm;