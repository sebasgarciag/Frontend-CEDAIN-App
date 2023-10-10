import React from 'react';
import { TouchableOpacity, Text, Alert, StyleSheet, View } from 'react-native';
import { exportAllInventario } from '../../apis/exportarApi';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import base64 from 'base-64';
import Icon from 'react-native-vector-icons/MaterialIcons';

function ShareInvButton({ invId, style }) {
    
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
        try {
            const data = await exportAllInventario(invId);

            if (!data) {
                throw new Error("No se recibieron datos del servidor.");
            }

            const base64Data = arrayBufferToBase64(data);
            const filename = `Inventario_${invId}.xlsx`;
            const uri = FileSystem.documentDirectory + filename;
            await FileSystem.writeAsStringAsync(uri, base64Data, {
                encoding: FileSystem.EncodingType.Base64,
            });

            if (!(await Sharing.isAvailableAsync())) {
                Alert.alert('Error', 'La compartición no está disponible en esta plataforma.');
                return;
            }

            await Sharing.shareAsync(uri);
        } catch (error) {
            console.error("Error al descargar o compartir el archivo:", error);
            Alert.alert('Error', 'Error al descargar o compartir el archivo.');
        }
    };

    return (
        
            <TouchableOpacity style={style} onPress={downloadAndShare}>
                <Icon name="upload-file" size={30} color="#333" />
            </TouchableOpacity>
        
    );
}





export default ShareInvButton;
