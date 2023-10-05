import { Text } from "react-native";
import React from "react";
import { Stack, IconButton, TextInput, Flex, HStack } from "@react-native-material/core";
import { MenuButton, ProfileButton, GenericButton, VolverButtonNDirect } from "../../components/UI/uiButtons";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import styles from "../../assets/styles";
import buttonStyles from "../../assets/buttons/styles";
import useCambiarContrasena from "./useCambiarContrasena";
import { useNavigation, useRoute } from '@react-navigation/native';

export default function CambiarContrasenaPage() {
  const route = useRoute();
  const usuario = route.params.object;
  const { newPassword, setNewPassword, confirmPassword, setConfirmPassword, isNewPasswordVisible, handleSumbit, toggleNewPasswordVisibility, arePasswordEqual } = useCambiarContrasena(usuario)
  const navigation = useNavigation();  

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
         <Text style={{ color: 'red' }}>{ arePasswordEqual ? "" : 'Las contraseñas deben ser iguales' }</Text>
        {/* <TextInput label="Label" variant="standard" marginBottom={}/> */}
        <Flex direction="row" justify="around" marginTop={80}>
          {/* <VolverButton onPress={() => router.replace("/editarUsuario")}/> */}
          {/* <VolverButtonN navigation={navigation} path="editarUsuario" object={usuario}/> */}
          <VolverButtonNDirect navigation={navigation}/>
          <GenericButton
            onPress={handleSumbit}
            text="Aceptar cambios"
            style={buttonStyles.volverB}
            // labelStyle={
            //   arePasswordEqual
            //     ? buttonStyles.editable_button
            //     : buttonStyles.view_only_button
            // }
            // Cambiar color a gray con isEditable
            width={500}
            // disabled={!arePasswordEqual}
            // disabled={true}
            mode="contained"
          />
        </Flex>
      </Stack>
    </>
  );
}
