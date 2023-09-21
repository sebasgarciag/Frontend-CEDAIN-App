import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import React, { useState } from "react";
import { Stack, TextInput, Flex, HStack } from "@react-native-material/core";
import { BurgerButton, UserButton } from "../../components/UI/uiButtons";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Dropdown } from "react-native-element-dropdown";
const data = [
  { label: "Administrador", value: "Administrador" },
  { label: "Almacenista", value: "Almacenista" },
];

export default function EditarUsuarioPage() {
  const [isEditable, setEditable] = useState(false);
  const [nombre, setNombre] = useState("Paco");
  const [apellidoPaterno, setApellidoPaterno] = useState("Martínez");
  const [apellidoMaterno, setApellidoMaterno] = useState("Gonzales");
  const [email, setEmail] = useState("paco.martinez@gmail.com");
  const [editarText, setEditarText] = useState("Editar");
  const [rol, setRol] = useState("Almacenista");

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

  const handleSumbit = () => {
    //request a backend
    alert("Enlace clickeado");
    setEditarText("Editar");
    setEditable(!isEditable);
  };

  const handleEditable = () => {
    // !isEditable
    if (isEditable) {
      // Qué pasar cuando cancelas
      setEditarText("Editar");
      // volvera tomar los valores de la BDD
    } else {
      // Qué pasar cuando cambias de modo no editar a modo editar
      setEditarText("Cancelar");
    }

    setEditable(!isEditable);
    // togglear valor del botón editar-cancelar edición
    // prender submit
    // si se cancela edición
        // volver los valores a los que estaban inicialmente
        // apagar submit
  };

  const handleLinkClick = () => {
    alert("Enlace clickeado");
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
          <BurgerButton />
          <UserButton />
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
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={isEditable ? styles.editable : styles.view_only}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
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
        <Flex direction="row" justify="around" marginTop={80}>
          <GenericButton
            onPress={handleEditable}
            style={buttonStyles.volverB}
            text={editarText}
            mode="contained"
            disabled={false}
          />

          <GenericButton
            onPress={handleSumbit}
            text="Aceptar cambios"
            style={buttonStyles.volverB}
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
        <TouchableOpacity
          onPress={handleLinkClick}
          style={{ marginTop: 10, alignSelf: "center", width: "50%" }}
        >
          <Text style={styles.link}>Cambiar contraseña</Text>
        </TouchableOpacity>
      </Stack>
    </>
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
const buttonStyles = {
  volverB: {
    justifyContent: "center",
    alignItems: "center",
    padding: "auto",
    backgroundColor: "gray",
  },
  view_only_button: {
    color: "#CCCCCC",
  },
  editable_button: {
    color: "white",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  view_only: {
    // fontSize: 36,
    // color: "#00FFA6",
    color: "gray",
  },
  editable: {
    // fontSize: 100,
    color: "black",
  },
  dropdown: {
    margin: 16,
    marginTop: 0,
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  viewOnlySelectedTextStyle: {
    fontSize: 16,
    color: "gray",
  },
  editableSelectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  link: {
    fontSize: 18,
    textDecorationLine: "underline",
    color: "blue",
  },
});
