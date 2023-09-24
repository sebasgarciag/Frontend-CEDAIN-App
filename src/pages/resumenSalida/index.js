import React from "react";
import { Text, View } from "react-native";
import { Spacer, VStack, HStack, Stack } from "@react-native-material/core";
import useResumen from "./hookResumen";
import ListaSalida from "../../components/entradasSalidas/listaResumen";
import { Surface } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import buttonStyles from "../../assets/buttons/styles";
import styles from "../../assets/styles";
import { VolverButtonN, SiguienteButtonN } from "../../components/UI/uiButtons";
import { useNavigation } from "expo-router";
import useCurrentScreen from "../../components/UI/useCurrentScreen";
import InfoSalida from "../../components/UI/infoSalida";

const Resumen = () => { 

    const { salida, datosSalida, handleCantidad } = useResumen();
    const navigation = useNavigation();
    const {currentScreen, setScreen} = useCurrentScreen(); 
    return (
        <Stack style={styles.container}>
        {/* <HStack style={styles.headerContainer}>
            <MenuButton onPress={() => { alert('Menú presionado'); }} />
            <ProfileButton onPress={() => { alert('Perfil presionado'); }} />
        </HStack> */}

            <HStack style={styles.titulosContainer}>
                <Text style={styles.headerText}>Resumen de salida</Text>
            </HStack>

            <InfoSalida salida={salida} />
            
            <ScrollView>
                <VStack>
                    <Spacer/>
                    
                    {datosSalida.map((datosSalida) => 
                        <Surface elevation={5} key={datosSalida.producto} style={styles.productItem}> 
                            <ListaSalida datos={datosSalida} handleCantidad={handleCantidad}/>
                        </Surface> 
                    )}

                </VStack>
            </ScrollView>
            <View style={ buttonStyles.containerNavegacion }>
                    <VolverButtonN navigation={navigation} path={"InfoDestinoN"} setScreen={setScreen} screen={"InfoDestino"}/>
                    <SiguienteButtonN navigation={navigation} path={"Home"} setScreen={setScreen} screen={""}/>
            </View>
        </Stack>
    );
};

export default Resumen;