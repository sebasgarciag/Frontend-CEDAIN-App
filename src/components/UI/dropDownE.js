import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';

const Dropdowns = ({ dataDropDownEvento, Titulo, setValueEvento, valueEvento }) => {
	const data = dataDropDownEvento;
	const [isFocusEvento, setIsFocusEvento] = useState(false);

	return (
		<View style={styles1.container}>
			<Text>{Titulo}</Text>
			<Dropdown
<<<<<<< HEAD
				style={[styles.dropdown, isFocusEvento && { borderColor: 'blue' }]}
				placeholderStyle={styles.placeholderStyleDropDown}
				selectedTextStyle={styles.selectedTextStyleDropDown}
				// inputSearchStyle={styles.inputSearchStyleDropDown}
				iconStyle={styles.iconStyleDropDown}
=======
				style={[styles1.dropdown, isFocusEvento && { borderColor: 'blue' }]}
				placeholderStyle={styles1.placeholderStyle}
				selectedTextStyle={styles1.selectedTextStyle}
				inputSearchStyle={styles1.inputSearchStyle}
				iconStyle={styles1.iconStyle}
>>>>>>> main
				data={data}
				// search
				maxHeight={300}
				labelField="nombre"
				valueField="id"
				placeholder={!isFocusEvento ? `Selecciona` : '...'}
				searchPlaceholder="Search..."
				value={valueEvento}
				onFocus={() => setIsFocusEvento(true)}
				onBlur={() => setIsFocusEvento(false)}
				onChange={item => {
					setValueEvento(item.id);
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

<<<<<<< HEAD
export default Dropdowns;
=======
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
>>>>>>> main
