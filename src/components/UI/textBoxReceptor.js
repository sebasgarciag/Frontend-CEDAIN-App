import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const TextboxReceptor = () => {
	return (
    
		<View style={styles3.container}>
			<TextInput 
				multiline
				numberOfLines={4}
				placeholder="Receptor"
			/>
		</View>
	);
};

const styles3 = StyleSheet.create({
	container: {
		width: "85%",
		borderColor: 'black',
		borderWidth: 3,
		paddingLeft: 10,
		borderRadius: 10,
		marginLeft: 16
	}
});

export default TextboxReceptor;