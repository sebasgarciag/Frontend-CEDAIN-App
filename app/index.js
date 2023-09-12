import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ListadoEntradas from '../src/pages/listadoEntradas'; // Adjust the path based on where you placed the LandingPage component

const Home = () => {
  return (
    <SafeAreaProvider>
      <ListadoEntradas />
    </SafeAreaProvider>
  );
}

export default Home;
