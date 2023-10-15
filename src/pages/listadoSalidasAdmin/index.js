import React, {useState} from 'react';
import { TextInput } from 'react-native';
import { HStack, Text, Stack, Divider} from "@react-native-material/core";
import { Modal } from 'react-native-paper';
import { MenuButton, ProfileButton, VolverButtonN, FilterButton, VolverButtonNDirect } from '../../components/UI/uiButtons';
import ListaSalidasAdmin from '../../components/UI/listaSalidasAdmin';
import useListadoSalidasAdmin from './useListadoSalidasAdmin';
import styles from '../../assets/styles';
import UserMenu from '../../components/UI/userMenu';
import FiltrosSalidasAdmin from '../../components/UI/filtrosSalidasAdmin';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';

const ListadoSalidasAdmin = () => {

    const { toggleUserDrawer, toggleModal, handlePress, filteredSalidas, setBusqueda, setAlmValue, setEveValue, isUserDrawerOpen, isModalVisible, almValue, eveValue, getSalidas} = useListadoSalidasAdmin();
    const navigation = useNavigation();

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
                    <MenuButton  />
                    <Text style={styles.headerText}>Salidas</Text>
                    <ProfileButton  onPress={toggleUserDrawer} />
                </HStack>

                <UserMenu isDrawerOpen={isUserDrawerOpen}/>

                    {/*Boton de aplicar Filtros a lista de entradas */}
                <Stack direction='row' style={styles.searchFilterContainer}>
                    <TextInput style={styles.searchInput} placeholder="Buscar..." placeholderTextColor="#8E8D8A" onChangeText={(text) => setBusqueda(text)}/>
                    <FilterButton  onPress={toggleModal} />
                </Stack>

                    {/*Las entradas apareceran aqui */}
                <Divider/>
                    <ListaSalidasAdmin listadoSalidas={filteredSalidas} />
                <Divider/>
                
                <Stack style={{justifyContent: 'center', alignItems: 'center', margin: 10}}>
                    <VolverButtonNDirect navigation={navigation}/>
                </Stack>

                <Modal visible={isModalVisible} onDismiss={toggleModal}>
                    <FiltrosSalidasAdmin onPress={handlePress} setAlmValue={setAlmValue} setEveValue={setEveValue} almValue={almValue} eveValue={eveValue}/>
                </Modal>

            </Stack>
        </>
    );
};

export default ListadoSalidasAdmin;