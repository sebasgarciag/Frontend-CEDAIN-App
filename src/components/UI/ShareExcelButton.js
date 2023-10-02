import React from 'react';
import { TouchableOpacity, Text, Alert, StyleSheet, View } from 'react-native';
import axios from 'axios';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import base64 from 'base-64';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ShareExcelButton({ endpoint, entryId, buttonText = "Exportar Excel" }) {
    
    // Función para convertir un ArrayBuffer en una cadena base64
    function arrayBufferToBase64(buffer) {
        let binary = '';
        const bytes = new Uint8Array(buffer);
        const len = bytes.byteLength;
        for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(bytes[i]);
        }
        return base64.encode(binary);
    }

    const downloadAndShare = async () => {
        const url = entryId ? `${endpoint}/${entryId}` : endpoint;

        try {
            // 1. Descargar el archivo Excel desde el servidor
            const { data } = await axios.get(url, { responseType: 'arraybuffer' });

            // 2. Convertir los datos descargados a una cadena base64
            const base64Data = arrayBufferToBase64(data);

            // 3. Guardar el archivo en el sistema de archivos local de la aplicación
            const filename = entryId ? `Entrada_${entryId}.xlsx` : 'Entradas.xlsx';
            const uri = FileSystem.documentDirectory + filename;
            await FileSystem.writeAsStringAsync(uri, base64Data, {
                encoding: FileSystem.EncodingType.Base64,
            });

            // 4. Compartir el archivo utilizando Expo Sharing
            if (!(await Sharing.isAvailableAsync())) {
                // Verificar si la compartición está disponible en la plataforma
                Alert.alert('Error', 'Sharing is not available on this platform');
                return;
            }

            await Sharing.shareAsync(uri); // Compartir el archivo
        } catch (error) {
            console.error("Error al descargar o compartir el archivo:", error);
            Alert.alert('Error', 'Error al descargar o compartir el archivo.');
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={downloadAndShare}>
                <Text style={styles.buttonText}>{buttonText}</Text>
                <Icon name="upload-file" size={30} color="#FFFFFF" />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        width: '37%',
        padding: 10,
        backgroundColor: "#4CAF50", // Verde
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 16,
        marginRight: 10, // Espaciado entre el texto y el icono
    }
});

export default ShareExcelButton;
