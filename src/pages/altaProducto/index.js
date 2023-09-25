import React, { useState } from "react";
import { ScrollView, StyleSheet, Alert, View, Image } from "react-native";
import { Text, TextInput, Title } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ArrowButton } from "../../components/inventario/buttons";
import DropdownE from "../../components/UI/dropDownE";
import useAltaProducto from "./useAlta.js";
import * as ImagePicker from 'expo-image-picker';
import { VolverButton } from '../../components/UI/uiButtons';
import { router } from "expo-router";



const DaraltaProducto = () => {
    const { setValueEvento, dataDropDownEvento, valueEvento } = useAltaProducto();
    const [nombreProducto, setNombreProducto] = useState("");
    const [medida, setMedida] = useState("");
    const [precio, setPrecio] = useState(0.0);
    const [nombreCorto, setNombreCorto] = useState("");
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <ScrollView style={styles.Container}>
            <View style={styles.View}>
                <Text style={{ fontSize: 26 }}>Editar Producto</Text>
                <ArrowButton onPress={() => router.replace("/inventario")} />
            </View>

            <View>
                <TextInput
                    label="Nombre del Producto"
                    value={nombreProducto}
                    onChangeText={text => setNombreProducto(text)}
                    style={styles.Input}
                />

                <DropdownE

                    setValueEvento={setValueEvento}
                    dataDropDownEvento={dataDropDownEvento}
                    valueEvento={valueEvento}
                    Titulo={"Tamaño"} />

                <TextInput
                    label="Medida"
                    value={medida}
                    onChangeText={text => setMedida(text)}
                    style={styles.Input}
                />
                <TextInput
                    label="Precio"
                    value={precio.toString()}
                    onChangeText={text => {
                        const newText = text.replace(/[^0-9.]/g, ''); // Solo permite números y puntos
                        const validText = newText.replace(/(\..*)\./g, '$1'); // Solo permite un punto
                        setPrecio(parseFloat(validText));
                    }}
                    keyboardType="numeric"
                    style={styles.Input}
                />


                <DropdownE

                    setValueEvento={setValueEvento}
                    dataDropDownEvento={dataDropDownEvento}
                    valueEvento={valueEvento}
                    Titulo={"Categoría"} />

                <TextInput
                    label="Nombre Corto"
                    value={nombreCorto}
                    onChangeText={text => setNombreCorto(text)}
                    style={styles.Input}
                />

                <TouchableOpacity title="Seleccionar imagen" onPress={pickImage} style={styles.ImageButton}><Text style={styles.Text}>Adjuntar Foto</Text></TouchableOpacity>
                {image && (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
                    </View>
                )}


            </View>

            <View>
                <TouchableOpacity onPress={""} style={styles.Button}>
                    <Icon name="check-circle" size={24} color="#F1EFE3" style={{ marginRight: 10 }}></Icon>
                    <Text style={{ fontSize: 20, color: '#F1EFE3', textAlign: 'center' }}>Guardar</Text>
                </TouchableOpacity>
            </View>

            <VolverButton onPress={() => { router.replace("/"); }} />





        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Container: {
        display: 'flex',
        backgroundColor: '#F1EFE3',
        paddingTop: '5%',

        height: '100%',

    },
    View: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
        maxWidth: '90%',
        marginLeft: '5%',
    },
    Title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 20,
        paddingTop: 20,

    },
    Input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        marginVertical: 10,
        maxWidth: '90%',
        marginLeft: '5%',
    },
    Button: {
        marginTop: 20,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: '#59CD90',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        alignSelf: 'center',
        marginBottom: '10%',
    },
    ImageButton: {

        marginTop: 20,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: 'gray',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 30,
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        alignSelf: 'center',
        marginBottom: '10%',
    },
    Text: {
        color: 'white',
    }
});

export default DaraltaProducto;
