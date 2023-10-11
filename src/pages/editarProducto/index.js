import React, { useState } from "react";
import { ScrollView, StyleSheet, Alert, View, Image } from "react-native";
import { Text, Title } from "react-native-paper";
import { Flex, TextInput, HStack, Stack } from "@react-native-material/core";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import { ArrowButton } from "../../components/inventario/buttons";
import DropdownE from "../../components/UI/dropDownE";
import useEditarProducto from "./useEditarProducto";
import * as ImagePicker from "expo-image-picker";
import buttonStyles from "../../assets/buttons/styles";
import { VolverButtonN, GenericButton, MenuButton, ProfileButton } from "../../components/UI/uiButtons";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "../../assets/styles";
import { Switch } from '@rneui/themed';


const EditarProducto = () => {
  
  
  const route = useRoute();
  const producto = route.params.object;
  const {
    // setValueEvento,
    // dataDropDownEvento,
    // valueEvento,
    handleEditable,
    nombre,
    setNombre,
    medida,
    setMedida,
    precioVenta,
    setPrecioVenta,
    precioTrueque,
    setPrecioTrueque,
    nombreCorto,
    setNombreCorto,
    image,
    setImage,
    handleSubmit,
    editarText,
    isEditable,
    open,
    setOpen
  } = useEditarProducto(producto);
  const navigation = useNavigation();

  console.log(producto)
  console.log(open)

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    //   canceled: false,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <ScrollView style={styles.Container}>
        <HStack
          direction="row"
          justify="center"
          m={4}
          style={{ justifyContent: "space-between" }}
        >
          <MenuButton onPress={() => { alert('Menú presionado'); }} />
          <ProfileButton onPress={() => { alert('Perfil presionado'); }} />
        </HStack>
      <View style={styles.View}>
        <Text style={{ fontSize: 26 }}>Editar Producto</Text>
      </View>

      <View>
        <TextInput
          label="Nombre del Producto"
          value={nombre}
          onChangeText={(text) => setNombre(text)}
        //   style={styles2.Input}
          editable={isEditable}
          inputStyle={isEditable ? styles.editable : styles.view_only}
        />

        {/* <DropdownE
                    
                    setValueEvento={setValueEvento}
                    dataDropDownEvento={dataDropDownEvento}
                    valueEvento={valueEvento}
                    Titulo={"Tamaño"} /> */}

        <TextInput
          label="Medida"
          value={medida}
          onChangeText={(text) => setMedida(text)}
          style={styles.Input}
          editable={isEditable}
          inputStyle={isEditable ? styles.editable : styles.view_only}
        />
        <TextInput
          label="Precio Venta"
          value={precioVenta.toString()}
          onChangeText={(text) => {
            const newText = text.replace(/[^0-9.]/g, ""); // Solo permite números y puntos
            const validText = newText.replace(/(\..*)\./g, "$1"); // Solo permite un punto
            setPrecioVenta(parseFloat(validText));
          }}
          keyboardType="numeric"
          style={styles.Input}
          editable={isEditable}
          inputStyle={isEditable ? styles.editable : styles.view_only}
        />
        <TextInput
          label="Precio Trueque"
          value={precioTrueque.toString()}
          onChangeText={(text) => {
            const newText = text.replace(/[^0-9.]/g, ""); // Solo permite números y puntos
            const validText = newText.replace(/(\..*)\./g, "$1"); // Solo permite un punto
            setPrecioTrueque(parseFloat(validText));
          }}
          keyboardType="numeric"
          style={styles.Input}
          editable={isEditable}
          inputStyle={isEditable ? styles.editable : styles.view_only}

        />

        {/* <DropdownE

                    setValueEvento={setValueEvento}
                    dataDropDownEvento={dataDropDownEvento}
                    valueEvento={valueEvento}
                    Titulo={"Categoría"} /> */}
        
        
        <TextInput
          label="Nombre Corto"
          value={nombreCorto}
          onChangeText={(text) => setNombreCorto(text)}
          style={styles.Input}
          editable={isEditable}
          inputStyle={isEditable ? styles.editable : styles.view_only}
        />

        <TouchableOpacity
          title="Seleccionar imagen"
          onPress={pickImage}
          style={styles2.ImageButton}
        >
          <Text style={styles2.Text}>Adjuntar Foto</Text>
        </TouchableOpacity>
        {image && (
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Image
              source={{ uri: image }}
              style={{ width: 200, height: 200 }}
            />
          </View>
        )}
      </View>

      <Flex direction="row" justify="around" marginTop={40}>
        <GenericButton
          onPress={handleEditable}
          style={buttonStyles.editarButton}
          text={editarText}
          mode="contained"
          disabled={false}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles2.Button} disabled={!isEditable} >
          <Icon
            name="check-circle"
            size={24}
            color="#F1EFE3"
            style={{ marginRight: 10 }}
          ></Icon>
          <Text style={{ fontSize: 20, color: "#F1EFE3", textAlign: "center" }}>
            Guardar
          </Text>
        </TouchableOpacity>
      </Flex>

      <VolverButtonN navigation={navigation} path={"listadoProductos"} />
      
      <Stack row align="center" style={{ width: '50%', bottom: 280,right:120 }}>
        <Text style={{left:148}}>Suspendido</Text>
        <Switch
          value={open}
          onValueChange={setOpen}
          color={open ? 'red' : 'gray'}
          disabled={!isEditable}
        />
      </Stack>
      
    </ScrollView>
  );
};

const styles2 = StyleSheet.create({
  Container: {
    display: "flex",
    backgroundColor: "#F1EFE3",
    paddingTop: "5%",

    height: "100%",
  },
  View: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
    maxWidth: "90%",
    marginLeft: "5%",
  },
  Title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginBottom: 20,
    paddingTop: 20,
  },
  Input: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 10,
    maxWidth: "90%",
    marginLeft: "5%",
  },
  Button: {
    marginTop: 20,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#59CD90",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    alignSelf: "center",
    marginBottom: "10%",
  },
  ImageButton: {
    marginTop: 20,
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "gray",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    flexDirection: "row",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    alignSelf: "center",
    marginBottom: "10%",
  },
  Text: {
    color: "white",
  },
});

export default EditarProducto;
