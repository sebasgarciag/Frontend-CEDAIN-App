import React from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Text, Spacer } from "@react-native-material/core";
import { BurgerButton, UserButton, VolverButton } from '../../components/UI/uiButtons';
import BarraBusqueda from '../../components/UI/searchbar';


const SalidaAlm = () => {
    return (
    <>
        <Stack flex={1}>

            <Stack direction='row' justify='center' m={4}>
                <BurgerButton />
                <BarraBusqueda />
                <UserButton />
            </Stack>


            <Stack direction='row' justify='center' flex={1}>
                <Text variant="body1">
                    salidas almacenista..
                </Text>
            </Stack>

            <Stack direction='row' justify='center' items='flex-end'>
                <VolverButton />
            </Stack>

            <Spacer />

        </Stack>
        </>
    );
};

const styles = StyleSheet.create({});

export default SalidaAlm;