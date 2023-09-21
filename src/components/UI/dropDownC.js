import React, { useState } from 'react';
	import { StyleSheet, Text, View } from 'react-native';
	import { Dropdown } from 'react-native-element-dropdown';
	import AntDesign from '@expo/vector-icons/AntDesign';

	const DropdownC = ({ dataDropDownComunidad, setValueComunidad, valueComunidad}) => {
		const data = dataDropDownComunidad;
		const [isFocusComunidad, setIsFocusComunidad] = useState(false);
	
		return (
			<View style={styles1.container}>
				<Text>Comunidad</Text>
				<Dropdown
					style={[styles1.dropdown, isFocusComunidad && { borderColor: 'blue' }]}
					placeholderStyle={styles1.placeholderStyle}
					selectedTextStyle={styles1.selectedTextStyle}
					inputSearchStyle={styles1.inputSearchStyle}
					iconStyle={styles1.iconStyle}
					data={data}
					search
					maxHeight={300}
					labelField="label"
					valueField="value"
					placeholder={!isFocusComunidad ? 'Select item' : '...'}
					searchPlaceholder="Search..."
					value={valueComunidad}
					onFocus={() => setIsFocusComunidad(true)}
					onBlur={() => setIsFocusComunidad(false)}
					onChange={item => {
						setValueComunidad(item.value);
						setIsFocusComunidad(false);
					}}
					renderLeftIcon={() => (
						<AntDesign
							style={styles1.icon}
							color={isFocusComunidad ? 'blue' : 'black'}
							name="Safety"
							size={20}
						/>
					)}
				/>
			</View>
		);
	};
	

	export default DropdownC;

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
		},
});