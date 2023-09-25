import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const Textbox = ({ text, setText, placeholder }) => {
	return (
		<View style={styles.container}>
		
		<TextInput
			multiline
			numberOfLines={4}
			placeholder={placeholder}
			value={text}
			onChangeText={(t) => setText(t)}
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

export default Textbox;
