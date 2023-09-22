import React from 'react';
import { Stack, Text, HStack } from "@react-native-material/core";
import { ExportarButton, VolverButton, MenuButton, ProfileButton } from '../../components/UI/uiButtons';
import useEntradaAdmin from './useEntradaAdmin';
import InfoEntrada from '../../components/UI/infoEntrada';
import ProductosEntrada from '../../components/UI/productosEntrada';
import styles from '../../assets/styles';

const EntradaAdmin = () => {

  const {entrada, datosEntrada} = useEntradaAdmin();
  
  return (
    <>
        <Stack style={styles.container}>
          <HStack style={styles.headerContainer}>
            <MenuButton onPress={() => { alert('Menú presionado'); }} />
            <ProfileButton onPress={() => { alert('Perfil presionado'); }} />
          </HStack>


          <Stack style={styles.titulosContainer}>
              <Text  style={styles.headerText}>Entrada <Text style={styles.movFolioSerie}>{entrada.folioSerie}</Text></Text>
              <ExportarButton/>
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

export default EntradaAdmin;
