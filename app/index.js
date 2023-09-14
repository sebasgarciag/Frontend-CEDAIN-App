import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View } from 'react-native';
import ListadoEntradasAlm from '../src/pages/listadoEntradasAlm/index.js'; // Adjust the path based on where you placed the LandingPage component
import ListadoEntradasAdmin from '../src/pages/listadoEntradasAdmin/index.js';
import ListadoSalidasAlm from '../src/pages/listadoSalidasAlm/index.js';
import ListadoSalidasAdmin from '../src/pages/listadoSalidasAdmin/index.js';
import EntradaAdmin from '../src/pages/entradaAdmin/index.js';
import EntradaAlm from '../src/pages/entradaAlm/index.js';
import SalidaAdmin from '../src/pages/salidaAdmin/index.js';
import SalidaAlm from '../src/pages/salidaAlm/index.js';
import {Stack, Redirect} from "expo-router";


const Home = () => {
  return (
    <>
        <View flex={1}>
           <ListadoSalidasAlm/>
        </View>
    </>
  );
}

export default Home;