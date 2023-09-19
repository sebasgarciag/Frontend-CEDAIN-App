import React from 'react';
import { StyleSheet } from 'react-native';
import { Stack, Text, Spacer, HStack } from "@react-native-material/core";
import { BurgerButton, UserButton, VolverButton } from '../../components/UI/uiButtons';
import BarraBusqueda from '../../components/UI/searchbar';


const SalidaAlm = () => {
    return (
        <>
            <Stack flex={1}>

                <HStack direction='row' justify='center' m={4} style={{justifyContent: 'space-between'}}>
                    <BurgerButton/>
                    <UserButton/>
                </HStack>


                <Stack direction='row' justify='center' flex={1}>
                    <Text variant="body1">
                        salida almacenista..
                    </Text>
                </Stack>

                {/*Boton de volver atras */}
                <Stack style={{ alignItems: 'baseline', justifyContent: 'flex-end', flex: 1, alignSelf: 'center', marginBottom: 20 }}>
                    <VolverButton />
                </Stack>

            </Stack>
        </>
    );
};

const styles = StyleSheet.create({});

export default SalidaAlm;