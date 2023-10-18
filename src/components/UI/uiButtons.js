import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Button, IconButton } from 'react-native-paper'
import buttonStyles from '../../assets/buttons/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/AntDesign';
import styles from '../../assets/styles';
// import { router } from 'expo-router';
import { useNavigation } from '@react-navigation/native';


const MenuButton = ({ onPress, style }) => {
  return (
    <TouchableOpacity style={[styles.arrowButtonButton, { backgroundColor: '#F1EFE3' }]} 
        onPress={() => {
        navigation.navigate(`${path}`);
        }}>
      <Icon name="menu" size={24} color="#F1EFE3" />
    </TouchableOpacity>
    );
};

const VolverButton = ({ ruta }) => {
  const handlePress = () => {
    if (ruta) {
      router.replace(ruta);
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.volverButton, { backgroundColor: '#59CD90' }]}
      onPress={handlePress} // Agregado el manejador de evento onPress
    >
      <Icon name="arrow-back" size={24} color="#F1EFE3" />
      <Text style={styles.buttonText}>Volver</Text>
    </TouchableOpacity>
  );
};

const EntradaNueva = ({navigation}) => {

  return (
    <TouchableOpacity 
    style={[styles.button, { backgroundColor: '#59CD90' }]}
    onPress={() => { navigation.navigate('CrearEntrada') }}
  >
    <Icon name="add-circle-outline" size={24} color="#F1EFE3" />
    <Text style={styles.buttonText}>Entrada Nueva</Text>
  </TouchableOpacity>
  );
}

const SalidaNueva = ({navigation}) => {

  return (
    <TouchableOpacity 
    style={[styles.button, { backgroundColor: '#E87461' }]}
    onPress={() => { navigation.navigate('CrearSalida') }}
  >
    <Icon name="remove-circle-outline" size={24} color="#F1EFE3" />
    <Text style={styles.buttonText}>Salida Nueva</Text>
  </TouchableOpacity>
  );
}

const VolverButtonN = ({navigation, path}) => {

  return (
    <TouchableOpacity style={[styles.volverButton, { backgroundColor: '#8F8B36' }]} 
      onPress={() => {
      navigation.navigate(`${path}`);
      }}>
    <Icon2 name="left" size={24} color="#F1EFE3" />
    <Text style={styles.buttonText}>Volver</Text>
  </TouchableOpacity>
  );
}
const VolverButtonNDirect = ({navigation}) => {

  return (
    <TouchableOpacity style={[styles.volverButton, { backgroundColor: '#8F8B36' }]} 
      onPress={() => {
      navigation.goBack();
      }}>
    <Icon2 name="left" size={24} color="#F1EFE3" />
    <Text style={styles.buttonText}>Volver</Text>
  </TouchableOpacity>
  );
}

const VolverButtonObject = ({navigation, path, object}) => {

  return (
    <TouchableOpacity style={[styles.volverButton, { backgroundColor: '#8F8B36' }]} 
      onPress={() => {
      navigation.navigate(`${path}`, { object });
      }}>
    <Text style={styles.buttonText}>Volver</Text>
    <Icon2 name="left" size={24} color="#F1EFE3" />
  </TouchableOpacity>
  );
}


const SiguienteButtonN = ({navigation, path}) => {

  return (
    <TouchableOpacity style={[styles.volverButton, { backgroundColor: '#8F8B36' }]} 
      onPress={() => {
      navigation.navigate(`${path}`);
      }}>
    <Text style={styles.buttonText}>Siguiente</Text>
    <Icon2 name="right" size={24} color="#F1EFE3" />
  </TouchableOpacity>
  );
}

const SiguienteButtonNObject = ({navigation, path, object}) => {

  return (
    <TouchableOpacity style={[styles.volverButton, { backgroundColor: '#8F8B36' }]} 
      onPress={() => {
      navigation.navigate(`${path}`, { object });
      }}>
    <Text style={styles.buttonText}>Siguiente</Text>
    <Icon2 name="right" size={24} color="#F1EFE3" />
  </TouchableOpacity>
  );
}

const ExportarButton = ({ onPress }) => {
    return (
      <TouchableOpacity style={[styles.volverButton, { backgroundColor: '#59CD90' }]}>
      <Icon name="open-in-new" size={24} color="#F1EFE3" />
      <Text style={styles.buttonText}>Exportar</Text>
    </TouchableOpacity>
    );
  };

const ProfileButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={[styles.userButton, { backgroundColor: '#F1EFE3', marginTop: 6, marginRight: 2 }]} 
        onPress={onPress}>
      <Icon name="person" size={24} color="black" />
    </TouchableOpacity>
    );
 };


const FilterButton = ({ onPress }) => {
    return(
      <TouchableOpacity style={styles.filterButton} onPress={onPress}>
      <Icon name="filter-list" size={24} color="#5B4C40" />
      </TouchableOpacity>
    );
    
 };

const ArrowButton = ({navigation, path}) => {
  return (
    <TouchableOpacity style={[styles.arrowButtonButton, { backgroundColor: 'white' }]} 
      onPress={() =>
          navigation.navigate(`${path}`)}
      >
    <Icon name="arrow-forward-ios" size={24} color="black" />
  </TouchableOpacity>
  );
}

const ArrowButtonConObject = ({navigation, path, object}) => {
  return (
    <TouchableOpacity style={[styles.arrowButtonButton, { backgroundColor: 'white' }]} 
      onPress={() => {
      navigation.navigate(`${path}`, { object });
      }}>
    <Icon name="arrow-forward-ios" size={24} color="black" />
  </TouchableOpacity>
  );
}



const GenericButton = ({ text, onPress, style, labelStyle, disabled }) => {
    return (
      <Button
        style={style}
        labelStyle={labelStyle}
        mode="contained"
        onPress={onPress}
        disabled={disabled}
      >
        {text}
      </Button>
    );
  };

const CambiarAlmacenCuu = ({navigation, path}) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: 'transparent', marginBottom: 60, borderColor: '#4A90E2', borderWidth: 2.5, paddingVertical: 25, paddingHorizontal: 50, borderRadius: 35 }]}
      onPress={() => {
      navigation.navigate(`${path}`, 1 );
      }}>
     <Icon name="store-mall-directory" size={38} color="#4A90E2" style={{ marginRight: 25 }} />
      <Text style={[styles.buttonText, { fontWeight: 'bold', fontSize: 22, color: '#4A90E2' }]}>Chihuahua</Text>
    </TouchableOpacity>
  );
}
const CambiarAlmacenCreel = ({navigation, path}) => {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: 'transparent', marginBottom: 60, borderColor: '#4A90E2', borderWidth: 2.5, paddingVertical: 25, paddingHorizontal: 50, borderRadius: 35 }]}
      onPress={() => {
      navigation.navigate(`${path}`, 3);
      }}>
     <Icon name="store-mall-directory" size={38} color="#4A90E2" style={{ marginRight: 25 }} />
      <Text style={[styles.buttonText, { fontWeight: 'bold', fontSize: 22, color: '#4A90E2' }]}>Creel</Text>
    </TouchableOpacity>
  );
}
 

const ButtonTerminar = ({ terminarFunction }) => {
  return (
      <TouchableOpacity 
          style={[styles.volverButton, { backgroundColor: '#59CD90' }]}
          onPress={terminarFunction}
      >
          <Text style={styles.buttonText}>Terminar</Text>
      </TouchableOpacity>
  );
};

export {MenuButton, CambiarAlmacenCreel, CambiarAlmacenCuu, ButtonTerminar, VolverButton, ProfileButton, FilterButton, ArrowButton, ExportarButton, VolverButtonN, SiguienteButtonN, SiguienteButtonNObject, GenericButton, EntradaNueva, SalidaNueva, ArrowButtonConObject, VolverButtonNDirect, VolverButtonObject};


//nota: Es posible que apliquemos un solo style para todos los botones. por lo pronto, cada uno tiene el suyo.

