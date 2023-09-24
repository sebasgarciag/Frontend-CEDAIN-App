import * as React from 'react';
import { Text } from 'react-native';
import { Drawer } from 'react-native-paper';
import { router } from 'expo-router'; // Asegúrese de que la importación sea correcta


const UserMenu = ({ isDrawerOpen }) => {
  const [active, setActive] = React.useState('');

  if (!isDrawerOpen) {
    return null;
  }

  return (
    <Drawer.Section>
      <Drawer.Item
        label="Cambiar Contraseña"
        active={active === 'first'}
        onPress={() => {
          setActive('first');
          router.replace("/resumenSalida");
        }}
      />
      <Drawer.Item
        label="Cerrar Sesión"
        active={active === 'second'}
        onPress={() => setActive('second')}
      />
    </Drawer.Section>
    
  );
};

export default UserMenu;
