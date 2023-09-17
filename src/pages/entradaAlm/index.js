import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HStack, Stack, Text, Spacer, Divider } from "@react-native-material/core";

import { BurgerButton, FiltrosButton, UserButton, VolverButton } from '../../components/UI/uiButtons';
import BarraBusqueda from '../../components/UI/searchbar';


const EntradaAlm = () => {
    return (
        <>
            <Stack options={{ title: "Entrada alamcenista" }} flex={1}>
            <View style={styles.container}>
                <Text>Entrada almacenista</Text>
            </View>




            {/*Boton de volver atras */}
            <Stack direction='row' justify='center' marginBottom={0}>
                <VolverButton />
            </Stack>

            </Stack>
        </>

    );
};

const styles = StyleSheet.create({});

export default EntradaAlm;