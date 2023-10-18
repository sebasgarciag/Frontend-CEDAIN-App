import React, { useEffect } from 'react';
import { Stack, Text} from "@react-native-material/core";
import { VolverButtonN } from '../../components/UI/uiButtons';
import InfoEntrada from '../../components/UI/infoEntrada';
import ProductosEntrada from '../../components/UI/productosEntrada';
import styles from '../../assets/styles';
import useEntradaAlm from './useEntradaAlm';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import ShareExcelButton from '../../components/UI/ShareExcelButton'; 

/**
 *  Componente que funciona como pantalla de detalles de una entrada.
 *
 * @param {Object} props - Propiedades pasadas al componente.
 * @param {Object} props.entrada - Datos de la entrada a mostrar.
 * @returns {JSX.Element} - Elemento JSX que representa los detalles de la entrada.
 */
const EntradaAlm = ( {entrada} ) => {

    const {datosEntrada, getDetallesEntrada} = useEntradaAlm();

    useEffect(() => {
        if(entrada?.id_entrada) {
            getDetallesEntrada(entrada.id_entrada);
        }
    }, [entrada?.id_entrada]);

    
    const navigation = useNavigation();

    return (
        <>
            <Stack style={styles.container}>

                <Stack style={styles.titulosContainer}>
                    <Text  style={styles.headerText}>Entrada {entrada.id_entrada} </Text>
                    <Text style={styles.headerText}>{entrada.folio + entrada.serie}</Text>
                </Stack>      

                {/* Aqui va componente con informacion de receptor, emisor, comunidad, etc. */}
                <InfoEntrada entrada={entrada}/>
                <ScrollView>
                    {datosEntrada.map((datoEntrada) =>
                        <ProductosEntrada entradaDetalle={datoEntrada} key={datoEntrada.id_entrada_detalle}/>
                    )}
                </ScrollView>
                {/* <ProductosEntrada datos={datosEntrada}/> */}

                <ShareExcelButton entryId={entrada.id_entrada} buttonText="Descargar Entrada" />

                {/*Boton de volver atras */}
                <Stack style={styles.volverContainer}>
                    <VolverButtonN navigation={navigation} path={'Entradas'}/>
                </Stack>
            </Stack>
        </>

    );
};

export default EntradaAlm;