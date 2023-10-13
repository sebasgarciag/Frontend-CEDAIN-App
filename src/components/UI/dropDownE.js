import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from "../../assets/styles"

const Dropdowns = ({ dataDropDownEvento, Titulo, setValueEvento, valueEvento }) => {
	const data = dataDropDownEvento;
	const [isFocusEvento, setIsFocusEvento] = useState(false);

	return (
		<View style={styles.containerDropDown}>
			<Text>{Titulo}</Text>
			<Dropdown
				style={[styles.dropdown, isFocusEvento && { borderColor: 'blue' }]}
				placeholderStyle={styles.placeholderStyleDropDown}
				selectedTextStyle={styles.selectedTextStyleDropDown}
				// inputSearchStyle={styles.inputSearchStyleDropDown}
				iconStyle={styles.iconStyleDropDown}
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
					setValueEvento(item);
					setIsFocusEvento(false);
				}}
				renderLeftIcon={() => (
					<AntDesign
						style={styles.iconDropDown}
						color={isFocusEvento ? 'blue' : 'black'}
						name="Safety"
						size={20}
					/>
				)}
			/>
		</View>
	);
};

export default Dropdowns;