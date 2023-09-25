import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import { router } from 'expo-router';

const BotonASC = ({ textoBoton1, textoBoton2, direccion1, direccion2 }) => {
	return (
		<View style={styles2.buttonContainer}>
			
			<Button 
				mode="contained" 
				// onPress={accionBoton1}
				onPress={() => router.replace(`/${direccion1}`)}
				style={{ backgroundColor: '#D2B48C' }}  // Color tierra clara para el fondo
			>
				{textoBoton1}
			</Button>
			<Button 
				mode="contained" 
				onPress={() => router.replace(`/${direccion2}`)} 
				style={{ backgroundColor: '#D2B48C' }}  // Color tierra clara para el fondo
			>
				{textoBoton2}
			</Button>
		</View>
	);
};

const styles2 = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10,
	},
});

export default BotonASC;

