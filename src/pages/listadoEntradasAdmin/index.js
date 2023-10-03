import React from 'react';
import { TextInput} from 'react-native';
import { Modal } from 'react-native-paper';
import { MenuButton, ProfileButton, FilterButton, VolverButtonN } from '../../components/UI/uiButtons';
import { HStack, Text, Stack, Divider} from "@react-native-material/core";
import ListaEntradasAdmin from '../../components/UI/listaEntradasAdmin';
import useListadoEntradasAdmin from './useListadoEntradasAdmin';
import UserMenu from '../../components/UI/userMenu';
import styles from '../../assets/styles';
import FiltrosEntradasAdmin from '../../components/UI/filtrosEntradasAdmin';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';


const ListadoEntradasAdmin = () => {

	const navigation = useNavigation();
	const {toggleUserDrawer, toggleModal, handlePress, filteredEntradas, setBusqueda, setAlmValue, setComValue, isUserDrawerOpen, isModalVisible, almValue, comValue, getEntradas} = useListadoEntradasAdmin();

	const isFocused = useIsFocused();
	useEffect(() => {
		if(isFocused) {
			getEntradas();
		}
	}, [isFocused]);

	return (
		<>
			<Stack style={styles.container}>
				<HStack style={styles.headerContainer}>
					<MenuButton  />
					<Text style={styles.headerText}>Entradas</Text>
					<ProfileButton onPress={ toggleUserDrawer } />
				</HStack>
				
				<UserMenu isDrawerOpen={isUserDrawerOpen}/>

						{/*Boton de aplicar Filtros a lista de entradas */}
				
				<Stack style={styles.searchFilterContainer}>
					<TextInput style={styles.searchInput} placeholder="Buscar..." placeholderTextColor="#8E8D8A" onChangeText={(text) => setBusqueda(text)}/>
					<FilterButton onPress={toggleModal}/>
				</Stack>

						{/*Las entradas apareceran aqui */}
				<Divider/>
					<ListaEntradasAdmin listadoEntradas={filteredEntradas} />
				<Divider/>
				
				<Stack style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
					<VolverButtonN navigation={navigation} path={'Inventario'}/>
				</Stack>

				<Modal visible={isModalVisible} onDismiss={toggleModal}>
						<FiltrosEntradasAdmin onPress={handlePress} setAlmValue={setAlmValue} setComValue={setComValue} almValue={almValue} comValue={comValue}/>
				</Modal>
				

			</Stack>
		</>
	);
};


export default ListadoEntradasAdmin;