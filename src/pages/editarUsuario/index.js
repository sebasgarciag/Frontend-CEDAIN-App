import { Text, View, TouchableOpacity } from "react-native";
import { Stack, TextInput, Flex, HStack } from "@react-native-material/core";
import { MenuButton, ProfileButton, GenericButton, VolverButtonN, VolverButtonNDirect } from "../../components/UI/uiButtons";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Dropdown } from "react-native-element-dropdown";
import styles from "../../assets/styles";
import buttonStyles from "../../assets/buttons/styles";
import useEditarUsuario from "./useEditarUsuario";
import { useNavigation, useRoute  } from '@react-navigation/native';

const EditarUsuarioPage = () => {
  const route = useRoute();
  const usuario = route.params.object;
  const {isEditable, nombre, setNombre, apellidoPaterno, setApellidoPaterno, apellidoMaterno, setApellidoMaterno, email, setEmail, editarText, rol, setRol, handleSumbit, handleEditable } = useEditarUsuario(usuario)
  const navigation = useNavigation();

  const roles = [
    { label: "Administrador", value: "Administrador" },
    { label: "Almacenista", value: "Almacenista" },
  ];
  

  const handleLinkClick = () => {
    navigation.navigate('cambiarContrasena', { object: usuario });
  };

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === rol && (
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
            { margin: 20, alignSelf: "center", marginBottom: 10, marginTop: 0 },
          ]}
        >
          Datos del usuario
        </Text>
        <TextInput
          label="Nombre"
          leading={(props) => <Icon name="account" {...props} />}
          editable={isEditable}
          value={nombre}
          inputStyle={isEditable ? styles.editable : styles.view_only}
          onChangeText={(text) => setNombre(text)}
        />
        <TextInput
          label="Apellido paterno"
          leading={(props) => <Icon name="account" {...props} />}
          editable={isEditable}
          value={apellidoPaterno}
          inputStyle={isEditable ? styles.editable : styles.view_only}
          onChangeText={(text) => setApellidoPaterno(text)}
        />
        <TextInput
          label="Apellido materno"
          leading={(props) => <Icon name="account" {...props} />}
          editable={isEditable}
          value={apellidoMaterno}
          inputStyle={isEditable ? styles.editable : styles.view_only}
          onChangeText={(text) => setApellidoMaterno(text)}
        />
        <TextInput
          label="email"
          variant="outlined"
          editable={isEditable}
          value={email}
          inputStyle={isEditable ? styles.editable : styles.view_only}
          onChangeText={(text) => setEmail(text)}
        />
        <Text marginTop={10}>Rol</Text>
        <Dropdown
          style={styles.dropdownRol}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={isEditable ? styles.editable : styles.view_only}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={roles}
          disable={!isEditable}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select item"
          value={rol}
          onChange={(item) => {
            setRol(item.value);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color="black"
              name="Safety"
              size={20}
            />
          )}
          renderItem={renderItem}
        />
        <Flex direction="row" justify="around" marginTop={40}>
          <GenericButton
            onPress={handleEditable}
            style={buttonStyles.editarButton}
            text={editarText}
            mode="contained"
            disabled={false}
          />

          <GenericButton
            onPress={handleSumbit}
            text="Aceptar cambios"
            style={buttonStyles.editarButton}
            labelStyle={
              isEditable
                ? buttonStyles.editable_button
                : buttonStyles.view_only_button
            }
            width={500}
            disabled={!isEditable}
            mode="contained"
          />
        </Flex>
        <Flex direction="row" justify="around" marginTop={30}>
        {/* <VolverButton onPress={() => router.replace("/botonesChernobyl")}/> */}
        {/* <VolverButtonN navigation={navigation} path="botonesChernobyl" /> */}
        <VolverButtonNDirect navigation={navigation} />
        <TouchableOpacity
          onPress={handleLinkClick}
          style={{ marginTop: 10, alignSelf: "center", width: "50%" }}
          >
          <Text style={styles.link}>Cambiar contraseña</Text>
        </TouchableOpacity>
          </Flex>
      </Stack>
    </>
  );
};

export default EditarUsuarioPage;
