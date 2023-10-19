import React from "react";
import { ScrollView, StyleSheet, Alert, View, Image } from "react-native";
import { Text } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';
import useAltaProducto from "./useAltaProducto.js";
import * as ImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';
import styles from "../../assets/styles";
import { Flex, HStack, TextInput } from "@react-native-material/core";
import { VolverButtonN, ProfileButton } from "../../components/UI/uiButtons";
import { Dropdown } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Switch } from '@rneui/themed';




const AltaProducto = () => {
    const {
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
      tamanio,
      categoria,
      setTamanio,
      setCategoria,
      tamaniosData,
      categoriasData,
      open,
      setOpen,
      loading,
      setLoading
    } = useAltaProducto();
    const navigation = useNavigation();
  
    const pickImage = async () => {
      setLoading(true); // start the loading process
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      // console.log(result);
  
      if (!result.canceled) {
        setImage(result.uri);
      }
      setLoading(false); // end the loading process
    };
    const renderItemTamanio = (item) => {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
          {item.value === tamanio && (
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
  
    const renderItemCategoria = (item) => {
      return (
        <View style={styles.item}>
          <Text style={styles.textItem}>{item.label}</Text>
          {item.value === categoria && (
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
      <ScrollView style={styles.Container}>
        <HStack
          direction="row"
          justify="center"
          marginTop={20}
          style={{ justifyContent: "space-between" }}
        >
          {/* <MenuButton onPress={() => { alert('Menú presionado'); }} /> */}
          <Text style={{ fontSize: 26, marginLeft:90 }}>Alta Producto</Text>
          <ProfileButton onPress={() => { alert('Perfil presionado'); }} />
        </HStack>
        {/* <View style={styles.View}>
          <Text style={{ fontSize: 26 }}>Crear Producto</Text>
        </View> */}
  
        <View>
          <TextInput
            label="Nombre del Producto"
            value={nombre}
            onChangeText={(text) => setNombre(text)}
            accessibilityLabel="nombre"
          />
  
          <TextInput
            label="Medida (cm)"
            value={medida}
            onChangeText={(text) => setMedida(text)}
            style={styles.Input}
            accessibilityLabel="medida"
            // editable={isEditable}
            // inputStyle={isEditable ? styles.editable : styles.view_only}
          />
          <TextInput
            label="Precio Venta"
            value={'$' + precioVenta.toString()}
            onChangeText={(text) => {
              const newText = text.replace(/[^0-9.]/g, ""); // Solo permite números y puntos
              const validText = newText.replace(/(\..*)\./g, "$1"); // Solo permite un punto
              setPrecioVenta(parseFloat(validText));
            }}
            keyboardType="numeric"
            style={styles.Input}
            accessibilityLabel="precio_venta"
            // editable={isEditable}
            // inputStyle={isEditable ? styles.editable : styles.view_only}
          />
          <TextInput
            label="Precio Trueque"
            value={'$' + precioTrueque.toString()}
            onChangeText={(text) => {
              const newText = text.replace(/[^0-9.]/g, ""); // Solo permite números y puntos
              const validText = newText.replace(/(\..*)\./g, "$1"); // Solo permite un punto
              setPrecioTrueque(parseFloat(validText));
            }}
            keyboardType="numeric"
            style={styles.Input}
            accessibilityLabel="precio_trueque"
          />
  
          <TextInput
            label="Nombre Corto"
            value={nombreCorto}
            onChangeText={(text) => setNombreCorto(text)}
            style={styles.Input}
            accessibilityLabel="nombre_corto"
          />
          <Text marginTop={10} marginLeft={20}>Tamaño</Text>
        <Dropdown
          style={styles.dropdownRol}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.editable}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={tamaniosData}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select item"
          value={tamanio}
          onChange={(item) => {
            setTamanio(item.value);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color="black"
              name="Safety"
              size={20}
            />
          )}
          renderItem={renderItemTamanio}
          accessibilityLabel="tamanio"

        />
        <Text marginTop={5} marginLeft={20}>Categoría</Text>
        <Dropdown
          style={styles.dropdownRol}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.editable}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={categoriasData}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder="Select item"
          value={categoria}
          onChange={(item) => {
            setCategoria(item.value);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={styles.icon}
              color="black"
              name="Safety"
              size={20}
            />
          )}
          renderItem={renderItemCategoria}
          accessibilityLabel="categoria"
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
          <Flex direction="row" justify='end' justifySelf="center">
          <Text>Suspendido</Text>
          <Switch
            value={open}
            onValueChange={setOpen}
            color={open ? 'red' : 'gray'}
            justifySelf='center'
          />
        </Flex>
        </View>

        <Flex direction="row" justify="around" marginTop={40}>
          <TouchableOpacity onPress={handleSubmit} style={styles2.Button} accessibilityLabel="guardar">
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

export default AltaProducto;
