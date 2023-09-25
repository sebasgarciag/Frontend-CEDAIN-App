import { Text } from "react-native";
import React from "react";
import { router } from "expo-router";
import { Stack, IconButton, TextInput, Flex, HStack } from "@react-native-material/core";
import { MenuButton, ProfileButton, GenericButton, VolverButton } from "../../components/UI/uiButtons";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "../../assets/styles";
import buttonStyles from "../../assets/buttons/styles";
import useCambiarContrasena from "./useCambiarContrasena";

export default function CambiarContrasenaPage() {
  const { newPassword, setNewPassword, confirmPassword, setConfirmPassword, isNewPasswordVisible, arePasswordEqual, setArePasswordEqual, toggleNewPasswordVisibility } = useCambiarContrasena()

  // poner lo de los sets en los inputs
  const handleSumbit = () => {
    //request a backend
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
          <MenuButton onPress={() => { alert('Menú presionado'); }} />
          <ProfileButton onPress={() => { alert('Perfil presionado'); }} />
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
          <VolverButton onPress={() => router.replace("/editarUsuario")}/>
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
