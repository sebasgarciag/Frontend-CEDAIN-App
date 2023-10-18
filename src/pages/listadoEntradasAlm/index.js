import React from 'react';
import { View } from 'react-native';
import { HStack, Stack, Text, Divider, VStack } from "@react-native-material/core";
import { Modal } from 'react-native-paper';
import { MenuButton, FilterButton, ProfileButton, VolverButtonN } from '../../components/UI/uiButtons';
import ListaEntradasAlm from '../../components/UI/listaEntradasAlm';
import useListadoEntradasAlm from './useListadoEntradasAlm';
import UserMenu from '../../components/UI/userMenu';
import styles from '../../assets/styles';
import FiltrosEntradasAlm from '../../components/UI/filtrosEntradasAlm';
import { useNavigation } from '@react-navigation/native';
import buttonStyles from '../../assets/buttons/styles';

/**
 * Componente para mostrar el listado de entradas de almacén.
 * 
 * Este componente presenta una lista filtrable de entradas de almacén, 
 * además de opciones de usuario y navegación.
 * Utiliza el hook `useListadoEntradasAlm` para manejar la lógica y el estado.
 */

const ListadoEntradasAlm = () => {
	const navigation = useNavigation();
	const {toggleUserDrawer, toggleModal, handlePress, filteredEntradas, 
		setComValue, isUserDrawerOpen, isModalVisible, comValue,
		usuarios, usuarioSeleccionado, setUsuarioSeleccionado,
		fechaInicial, setFechaInicial, fechaFinal, setFechaFinal,
		almacenes, almacenSeleccionado, setAlmacenSeleccionado
	} = useListadoEntradasAlm();

	return (
			<>
				<Stack style={styles.container}>
					<HStack style={styles.headerContainer}>
						<MenuButton />
						<VStack style={{alignItems: 'center'}}>
								<Text style={styles.headerText}>Entradas</Text>
								<Text>Nombre Almacenista</Text>
						</VStack>
						<ProfileButton  onPress={toggleUserDrawer} />
					</HStack>
					<UserMenu isDrawerOpen={isUserDrawerOpen}/>

							{/*Boton de aplicar Filtros a lista de entradas */}
					<Stack style={styles.searchFilterContainer}>
						{/* <TextInput style={styles.searchInput} placeholder="Buscar..." placeholderTextColor="#8E8D8A" onChangeText={(text) => setBusqueda(text)}/> */}
						<Text style={styles.searchInput}>Filtros</Text>
						<FilterButton onPress={toggleModal} />
					</Stack>

							{/*Las entradas apareceran aqui */}
					<Divider/>
					<ListaEntradasAlm listadoEntradas={filteredEntradas} />
					<Divider/>
					
					<View style={ buttonStyles.containerNavegacion }>
							<VolverButtonN navigation={navigation} path={"Inventario"}/>
					</View>

					<Modal visible={isModalVisible} onDismiss={toggleModal}>
						<FiltrosEntradasAlm 
							onPress={handlePress}  
							setComValue={setComValue} 
							comValue={comValue}
							usuarios={usuarios}
							usuarioSeleccionado={usuarioSeleccionado}
							setUsuarioSeleccionado={setUsuarioSeleccionado}
							fechaInicial={fechaInicial}
							setFechaInicial={setFechaInicial}
							fechaFinal={fechaFinal}
							setFechaFinal={setFechaFinal}
							almacenes={almacenes}
							almacenSeleccionado={almacenSeleccionado}
							setAlmacenSeleccionado={setAlmacenSeleccionado}
						/>
					</Modal>

				</Stack>
			</>
	);
};


export default ListadoEntradasAlm;
