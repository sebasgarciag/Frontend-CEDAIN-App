import { Text, View, TouchableOpacity } from "react-native";
import { Stack, TextInput, Flex, HStack } from "@react-native-material/core";
import { MenuButton, ProfileButton, GenericButton, VolverButtonN, VolverButtonNDirect } from "../../components/UI/uiButtons";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Dropdown } from "react-native-element-dropdown";
import styles from "../../assets/styles";
import buttonStyles from "../../assets/buttons/styles";
import { useAltaUsuario } from './useAltaUsuario'; // reemplaza 'rutaDelArchivo' con la ruta al archivo que contiene tu hook
import { useNavigation, useRoute  } from '@react-navigation/native';

const AltaUsuarioPage = () => {
  
  const { nombre, setNombre, apellidoPaterno, setApellidoPaterno, apellidoMaterno, setApellidoMaterno, email, setEmail, tipo, setTipo, handleRegister } = useAltaUsuario();
  const navigation = useNavigation();

  const roles = [
    { label: "Administrador", value: "Administrador" },
    { label: "Almacenista", value: "Almacenista" },
  ];



 
  const renderItem = () => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === tipo && (
          <AntDesign
            style={styles.icon}
            color="black"
            name="Safety"
            size={20}
          />
        )}
      </View>
    );
  };

  return (
    <>
      <Stack spacing={2} style={{ margin: 16 }}>
        <HStack
          direction="row"
          justify="center"
          m={4}
          style={{ justifyContent: "space-between" }}
        >
          <MenuButton onPress={() => { alert('Menú presionado'); }} />
          <ProfileButton onPress={() => { alert('Perfil presionado'); }} />
        </HStack>
        <Text
          style={[
            styles.subtitle,
            { margin: 20, alignSelf: "center", marginBottom: 10, marginTop: 0, paddingBottom:30},
          ]}
        >
          Crear Nuevo Usuario
        </Text>
        <TextInput
          label="Nombre"
          leading={(props) => <Icon name="account" {...props} />}
          variant="outlined"
          
          value={nombre}
          
          onChangeText={(text) => setNombre(text)}
        />
        <TextInput
          label="Apellido paterno"
          leading={(props) => <Icon name="account" {...props} />}
          variant="outlined"
          
          value={apellidoPaterno}
          
          onChangeText={(text) => setApellidoPaterno(text)}
        />
        <TextInput
          label="Apellido materno"
          leading={(props) => <Icon name="account" {...props} />}
          variant="outlined"
          
          value={apellidoMaterno}
          
          onChangeText={(text) => setApellidoMaterno(text)}
        />
        <TextInput
          label="Email"
          leading={(props) => <Icon name="email" {...props} />}
          variant="outlined"
          
          value={email}
          
          onChangeText={(text) => setEmail(text)}
        />
        
        <Text marginTop={10}>Rol</Text>
        <Dropdown
          style={styles.dropdownRol}
          placeholderStyle={styles.placeholderStyle}
          
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={roles}
          onChange={(value) => {
            setTipo(value);
          }}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Seleccione Rol"
          value={tipo}
          
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color="black"
              name="Safety"
              size={20}
            />
          )}
          
        />

       

          
          
        <Flex direction="row" justify="around" marginTop={40}>
          

          <TouchableOpacity onPress={handleRegister} style={[buttonStyles.button, {backgroundColor: '#59CD90', width: 250, justifyContent: 'center', alignItems: 'center', borderRadius: 50 }]} >
            <Text style={{ fontSize: 25,color:"white" }}>Crear Usuario</Text>
          </TouchableOpacity>

        </Flex>
        <Flex direction="row" justify="around" marginTop={30}>
        {/* <VolverButton onPress={() => router.replace("/botonesChernobyl")}/> */}
        {/* <VolverButtonN navigation={navigation} path="botonesChernobyl" /> */}
        <VolverButtonNDirect navigation={navigation} />
        
          </Flex>
      </Stack>
    </>
  );
};

export default AltaUsuarioPage;
