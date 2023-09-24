// Menulateral.js
import * as React from 'react';
import { Text } from 'react-native';
import { Drawer } from 'react-native-paper';
import { router } from 'expo-router'; // Asegúrese de que la importación sea correcta


const Menulateral = ({ isDrawerOpen }) => {
  const [active, setActive] = React.useState('');

  if (!isDrawerOpen) {
    return null;
  }

  return (
    <Drawer.Section>
      <Drawer.Item
        label="Entrada Nueva"
        active={active === 'first'}
        onPress={() => {
          setActive('first');
          router.replace("/resumenSalida");
        }}
      />
      <Drawer.Item
        label=" Ver Entradas"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
      <Drawer.Item
        label=" Salida Nueva"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
      <Drawer.Item
        label="Ver Salidas"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
      <Drawer.Item
        label="Inventario"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </Drawer.Section>
    
  );
};

export default Menulateral;
