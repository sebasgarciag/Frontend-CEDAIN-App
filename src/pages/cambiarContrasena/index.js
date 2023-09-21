import { StyleSheet, Text } from "react-native";
import { Button } from "react-native-paper";
import React, { useState } from "react";
import {
  Stack,
  IconButton,
  TextInput,
  Flex,
  HStack,
} from "@react-native-material/core";
import { BurgerButton, UserButton } from "../../components/UI/uiButtons";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

export default function CambiarContrasenaPage() {
  const [isEditable, setEditable] = useState(false);
  //   const [editarText, setEditarText] = useState('Editar')
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
  const [arePasswordEqual, setarePasswordEqual] = useState(false);

  const toggleNewPasswordVisibility = () => {
    setIsNewPasswordVisible(!isNewPasswordVisible);
  };

  // poner lo de los sets en los inputs
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
            {
              margin: 20,
              alignSelf: "center",
              marginBottom: 10,
              marginTop: 0,
              fontSize: 30,
            },
          ]}
        >
          Cambiar contraseña
        </Text>
        <TextInput
          label="Nueva contraseña"
          variant="outlined"
          value={newPassword}
          onChangeText={(text) => setNewPassword(text)}
          secureTextEntry={!isNewPasswordVisible}
          style={{ marginTop: 100 }}
          trailing={
            <IconButton
              icon={(props) => (
                <Icon
                  name={isNewPasswordVisible ? "eye" : "eye-off"}
                  {...props}
                  onPress={toggleNewPasswordVisibility}
                />
              )}
            />
          }
        />
        <TextInput
          label="Confirmar contraseña"
          variant="outlined"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry={true}
          style={{ marginTop: 20 }}
        />
        {/* <TextInput label="Label" variant="standard" marginBottom={}/> */}
        <Flex direction="row" justify="around" marginTop={80}>
          <GenericButton
            onPress={handleEditable}
            style={buttonStyles.volverB}
            text="Cancelar"
            mode="contained"
            disabled={false}
          />

          <GenericButton
            onPress={handleSumbit}
            text="Aceptar cambios"
            style={buttonStyles.volverB}
            labelStyle={
              arePasswordEqual
                ? buttonStyles.editable_button
                : buttonStyles.view_only_button
            }
            // Cambiar color a gray con isEditable
            width={500}
            disabled={!arePasswordEqual}
            // disabled={true}
            mode="contained"
          />
        </Flex>
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
