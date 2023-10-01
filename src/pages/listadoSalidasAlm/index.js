import React, {useState} from 'react';
import { TextInput, View } from 'react-native';
import { HStack, Text, Stack, Divider, VStack } from "@react-native-material/core";
import { Modal, Button } from 'react-native-paper';
import { MenuButton, ProfileButton, VolverButtonN, FilterButton } from '../../components/UI/uiButtons';
import ListaSalidasAlm from '../../components/UI/listaSalidasAlm';
import useListadoSalidasAlm from './useListadoSalidasAlm';
import styles from '../../assets/styles';
import UserMenu from '../../components/UI/userMenu';
import FiltrosSalidasAlm from '../../components/UI/filtrosSalidasAlm';
import buttonStyles from '../../assets/buttons/styles';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';

const ListadoSalidasAlm = () => {
	const navigation = useNavigation();  
	const { toggleUserDrawer, toggleModal, handlePress, filteredSalidas, setBusqueda, setEveValue,  isUserDrawerOpen, isModalVisible, eveValue, getSalidas} = useListadoSalidasAlm();

	const isFocused = useIsFocused();
	useEffect(() => {
		if(isFocused) {
			getSalidas();
		}
	}, [isFocused]);

	return (
		<>
				<Stack style={styles.container}>
					<HStack style={styles.headerContainer}>
						<MenuButton/>
						<VStack style={{alignItems: 'center'}}>
								<Text style={styles.headerText}>Salidas</Text>
								<Text>Nombre Almacenista</Text>
						</VStack>
						<ProfileButton onPress={toggleUserDrawer} />
					</HStack>
					<UserMenu isDrawerOpen={isUserDrawerOpen}/>
	
							{/*Boton de aplicar Filtros a lista de entradas */}
					<Stack style={styles.searchFilterContainer}>
						<TextInput style={styles.searchInput} placeholder="Buscar..." placeholderTextColor="#8E8D8A" onChangeText={(text) => setBusqueda(text)}/>
						<FilterButton  onPress={toggleModal} />
					</Stack>
	
							{/*Las entradas apareceran aqui */}
					<Divider/>
						<ListaSalidasAlm listadoSalidas={filteredSalidas} />
					<Divider/>
					

					<View style={ buttonStyles.containerNavegacion }>
								<VolverButtonN navigation={navigation} path={"Inventario"}/>
					</View>

					<Modal visible={isModalVisible} onDismiss={toggleModal}>
								<FiltrosSalidasAlm onPress={handlePress} setEveValue={setEveValue} eveValue={eveValue}/>
					</Modal>

				</Stack>
			</>
	);
};


export default ListadoSalidasAlm;