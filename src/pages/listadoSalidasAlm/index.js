import React from 'react';
import { TextInput, View } from 'react-native';
import { HStack, Text, Stack, Divider, VStack } from "@react-native-material/core";
import { Modal } from 'react-native-paper';
import { MenuButton, ProfileButton, VolverButtonN, FilterButton, VolverButtonNDirect } from '../../components/UI/uiButtons';
import ListaSalidasAlm from '../../components/UI/listaSalidasAlm';
import useListadoSalidasAlm from './useListadoSalidasAlm';
import styles from '../../assets/styles';
import UserMenu from '../../components/UI/userMenu';
import FiltrosSalidasAlm from '../../components/UI/filtrosSalidasAlm';
import buttonStyles from '../../assets/buttons/styles';
import { useNavigation } from '@react-navigation/native';

const ListadoSalidasAlm = () => {
	const navigation = useNavigation();  
	const { toggleUserDrawer, toggleModal, handlePress, filteredSalidas, 
		setEveValue,  isUserDrawerOpen, isModalVisible, eveValue, 
		usuarios, usuarioSeleccionado, setUsuarioSeleccionado, 
		fechaInicial, setFechaInicial, fechaFinal, setFechaFinal,
		almacenes, almacenSeleccionado, setAlmacenSeleccionado
	} = useListadoSalidasAlm();

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
						{/* <TextInput style={styles.searchInput} placeholder="Buscar..." placeholderTextColor="#8E8D8A" onChangeText={(text) => setBusqueda(text)}/> */}
						<Text style={styles.searchInput}>Filtros</Text>
						<FilterButton  onPress={toggleModal} />
					</Stack>
	
							{/*Las entradas apareceran aqui */}
					<Divider/>
						<ListaSalidasAlm listadoSalidas={filteredSalidas} />
					<Divider/>
					

					<View style={ buttonStyles.containerNavegacion }>
								<VolverButtonNDirect navigation={navigation}/>
					</View>

					<Modal visible={isModalVisible} onDismiss={toggleModal}>
						<FiltrosSalidasAlm 
							onPress={handlePress} 
							setEveValue={setEveValue} 
							eveValue={eveValue}
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


export default ListadoSalidasAlm;