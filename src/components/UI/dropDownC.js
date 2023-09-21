import React, { useState } from 'react';
	import { StyleSheet, Text, View } from 'react-native';
	import { Dropdown } from 'react-native-element-dropdown';
	import AntDesign from '@expo/vector-icons/AntDesign';

	const data = [
		{ label: 'Item 1', value: '1' },
		{ label: 'Item 2', value: '2' },
		{ label: 'Item 3', value: '3' },

	];

	const DropdownComentario = () => {
		const [value, setValue] = useState(null);
		const [isFocus, setIsFocus] = useState(false);


		return (
			<View style={styles1.container}>
				<Text>Comunidad</Text>
				<Dropdown
					style={[styles1.dropdown, isFocus && { borderColor: 'blue' }]}
					placeholderStyle={styles1.placeholderStyle}
					selectedTextStyle={styles1.selectedTextStyle}
					inputSearchStyle={styles1.inputSearchStyle}
					iconStyle={styles1.iconStyle}
					data={data}
					search
					maxHeight={300}
					labelField="label"
					valueField="value"
					placeholder={!isFocus ? 'Select item' : '...'}
					searchPlaceholder="Search..."
					value={value}
					onFocus={() => setIsFocus(true)}
					onBlur={() => setIsFocus(false)}
					onChange={item => {
						setValue(item.value);
						setIsFocus(false);
					}}
					renderLeftIcon={() => (
						<AntDesign
							style={styles1.icon}
							color={isFocus ? 'blue' : 'black'}
							name="Safety"
							size={20}
						/>
					)}
				/>
			</View>
		);
	};

	export default DropdownComentario;

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