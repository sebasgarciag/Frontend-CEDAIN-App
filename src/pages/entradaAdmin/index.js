import React, {useState} from 'react';
import { Stack, Text, HStack } from "@react-native-material/core";
import { ExportarButton, VolverButton, MenuButton, ProfileButton } from '../../components/UI/uiButtons';
import useEntradaAdmin from './useEntradaAdmin';
import InfoEntrada from '../../components/UI/infoEntrada';
import ProductosEntrada from '../../components/UI/productosEntrada';
import styles from '../../assets/styles';
import Menulateral from '../../components/UI/MenuLateral';
import UserMenu from '../../components/UI/userMenu';

const EntradaAdmin = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {setIsDrawerOpen(!isDrawerOpen);};
  const [isUserDrawerOpen, setIsUserDrawerOpen] = useState(false);
  const toggleUserDrawer = () => {setIsUserDrawerOpen(!isUserDrawerOpen);};

  const {entrada, datosEntrada} = useEntradaAdmin();
  
  return (
    <>
        <Stack style={styles.container}>
          <HStack style={styles.headerContainer}>
            <MenuButton onPress={toggleDrawer} />
            <ProfileButton onPress={toggleUserDrawer} />
          </HStack> 

          <Stack style={styles.titulosContainer}>
              <Text  style={styles.headerText}>Entrada <Text style={styles.movFolioSerie}>{entrada.folioSerie}</Text></Text>
              <ExportarButton/>
          </Stack>   

          <Menulateral isDrawerOpen={isDrawerOpen}/>
          <UserMenu isDrawerOpen={isUserDrawerOpen}/>  
  


           {/* Aqui va componente con informacion de receptor, emisor, comunidad, etc. */}
          <InfoEntrada entrada={entrada}/>
          <ProductosEntrada datos={datosEntrada}/>

          {/*Boton de volver atras */}
          <Stack style={styles.volverContainer}>
              <VolverButton ruta="/listadoEntradasAdmin"/>
          </Stack>


        </Stack>
    </>
   
  );
};

export default EntradaAdmin;
