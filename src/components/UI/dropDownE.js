import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const DropdownE = ({ dataDropDownEvento,Titulo, setValueEvento, valueEvento}) => {
	const data = dataDropDownEvento;
	const [isFocusEvento, setIsFocusEvento] = useState(false);

	return (
		<View style={styles1.container}>
			<Text>{Titulo}</Text>
			<Dropdown
				style={[styles1.dropdown, isFocusEvento && { borderColor: 'blue' }]}
				placeholderStyle={styles1.placeholderStyle}
				selectedTextStyle={styles1.selectedTextStyle}
				inputSearchStyle={styles1.inputSearchStyle}
				iconStyle={styles1.iconStyle}
				data={data}
				search
				maxHeight={300}
				labelField="label"
				valueField="value"
				placeholder={!isFocusEvento ? 'Select item' : '...'}
				searchPlaceholder="Search..."
				value={valueEvento}
				onFocus={() => setIsFocusEvento(true)}
				onBlur={() => setIsFocusEvento(false)}
				onChange={item => {
					setValueEvento(item.value);
					setIsFocusEvento(false);
				}}
				renderLeftIcon={() => (
					<AntDesign
						style={styles1.icon}
						color={isFocusEvento ? 'blue' : 'black'}
						name="Safety"
						size={20}
					/>
				)}
			/>
		</View>
	);
};

export default DropdownE;

const styles1 = StyleSheet.create({
	container: {
		padding: 16
	},
	dropdown: {
		padding: 10,
		borderColor: 'gray',
		borderWidth: 0.5,
		borderRadius: 8
	},
	icon: {
		marginRight: "2%"
	},
	label: {
		backgroundColor: 'white',
		paddingHorizontal: 8,
		fontSize: 14
	},
	placeholderStyle: {
		fontSize: 16
	},
	selectedTextStyle: {
		fontSize: 16
	},
	iconStyle: {
		width: 20,
		height: 20
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16
	}
});