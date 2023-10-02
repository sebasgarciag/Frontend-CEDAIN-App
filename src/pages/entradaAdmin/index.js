import React, {useState} from 'react';
import { Stack, Text, HStack } from "@react-native-material/core";
import { ExportarButton, VolverButtonN, MenuButton, ProfileButton } from '../../components/UI/uiButtons';
import useEntradaAdmin from './useEntradaAdmin';
import InfoEntrada from '../../components/UI/infoEntrada';
import ProductosEntrada from '../../components/UI/productosEntrada';
import styles from '../../assets/styles';
import { useNavigation } from '@react-navigation/native';
import ShareExcelButton from '../../components/UI/ShareExcelButton'; 


const EntradaAdmin = () => {

  const navigation = useNavigation();

  const {entrada, datosEntrada} = useEntradaAdmin();
  
  return (
    <>
        <Stack style={styles.container}>

          <Stack style={styles.titulosContainer}>
              <Text  style={styles.headerText}>Entrada <Text style={styles.movFolioSerie}>{entrada.folioSerie}</Text></Text>
              <ExportarButton/>
          </Stack>   

           {/* Aqui va componente con informacion de receptor, emisor, comunidad, etc. */}
          <InfoEntrada entrada={entrada}/>
          <ProductosEntrada datos={datosEntrada}/>

          <ShareExcelButton 
            endpoint="http://192.168.1.211:8080/entradas/export" //Aqui primero va la direccion ip de la compu que prueba el servidor sql
            entryId={entrada.idEntrada} 
            buttonText="Descargar Entrada"
          />

          {/*Boton de volver atras */}
          <Stack style={styles.volverContainer}>
            <VolverButtonN navigation={navigation} path={'EntradasAdmin'}/>
          </Stack>


        </Stack>
    </>
   
  );
};

export default EntradaAdmin;
