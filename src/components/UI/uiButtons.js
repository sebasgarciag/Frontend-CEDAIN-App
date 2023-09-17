import React from 'react';
import { View } from 'react-native';
import { Button, IconButton } from 'react-native-paper'
import buttonStyles from '../../assets/buttons/styles';

const BurgerButton = ({ onPress }) => {
  return (
    <IconButton
      icon="dots-horizontal"
      size={30}
      style={buttonStyles.burgerButton}
      onPress={() => console.log('Pressed')}
    />
  );
};

const VolverButton = ({ onPress }) => {
  return (
    <Button 
    style={buttonStyles.volverB}    //*nota
    mode="contained" 
    onPress={() => console.log('Volver Pressed')}>
    Volver
  </Button>
  );
};

const ExportarButton = ({ onPress }) => {
    return (
      <Button 
      style={buttonStyles.exportarB}    //*nota
      mode="contained" 
      onPress={() => console.log('Exportar Pressed')}>
      Exportar
    </Button>
    );
  };

const UserButton = () => {
  return (
      <IconButton
        icon="account"
        size={30}
        style={buttonStyles.userButton} //*nota
        onPress={() => console.log('Pressed')}
      />
  );
};

const FiltrosButton = ({ onPress }) => {
    return (
      <Button 
      style={buttonStyles.filtrosB} //*nota
      mode="contained" 
      onPress={() => console.log('Filtros Button')}>
      Filtros
    </Button>
    );
  };

  const OpenRegistroButton = () => {
    return (
      <IconButton
          icon='arrow-right-drop-circle'
          size={35}
          onPress={() => console.log('Pressed')}
          style={{flex: 1}}
      />
    );
  };

export {BurgerButton, VolverButton, UserButton, FiltrosButton, OpenRegistroButton, ExportarButton};


//nota: Es posible que apliquemos un solo style para todos los botones. por lo pronto, cada uno tiene el suyo.
