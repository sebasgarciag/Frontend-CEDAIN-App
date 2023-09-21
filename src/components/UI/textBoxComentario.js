
import { Box } from '@react-native-material/core';
import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const TextboxComentario = () => {
	return (
		<View style={styles.container}>
		<TextInput
			multiline
			numberOfLines={4}
			placeholder="comentarios"
		/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: "85%",
		borderColor: 'black',
		borderWidth: 3,
		paddingLeft: 10,
		borderRadius: 10,
		marginLeft: 16
	}
});

export default TextboxComentario;
