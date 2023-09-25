import React from "react";
import { Text, View } from "react-native";
import { Spacer, VStack, HStack, Stack } from "@react-native-material/core";
import useResumen from "./hookResumen";
import ListaSalida from "../../components/entradasSalidas/listaResumen";
import { Surface } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
<<<<<<< HEAD
import buttonStyles from "../../assets/buttons/styles";
import styles from "../../assets/styles";
import { VolverButtonN, SiguienteButtonN } from "../../components/UI/uiButtons";
import { useNavigation } from "expo-router";
import InfoSalida from "../../components/UI/infoSalida";
=======
>>>>>>> main

const Resumen = () => { 

    const { salida, datosSalida, handleCantidad } = useResumen();
<<<<<<< HEAD
    const navigation = useNavigation();

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
                    <VolverButtonN navigation={navigation} path={"InfoDestinoN"} />
                    <SiguienteButtonN navigation={navigation} path={"Home"} />
            </View>
        </Stack>
=======

    return (

        <ScrollView>
        <VStack style={{ padding: 10 }} spacing={20}>
            <Box style={{ backgroundColor: "black", padding: 10, borderRadius: 10 }}>
                <Text style={{ color: "white", fontSize: 20 }}>Resumen de salida</Text>
            </Box>
            <CuadroSalida salida={salida} />
            <Spacer/>
            
            
            {datosSalida.map((datosSalida) => 
            
                <Surface elevation={5} key={datosSalida.producto} style={{borderRadius: 10, padding: 4, backgroundColor: "lightgray"}}> 
                    <HStack>
                    <ListaSalida datos={datosSalida}/>

                    <Box style={{width: "25%", justifyContent: "center"}}>
                            <TextInput 
                                style={{ textAlign: "center", textAlignVertical: "bottom", paddingRight: 10, fontSize: 20, fontWeight: "bold" }} 
                                defaultValue="0"
                                onChangeText={ newCantidad => handleCantidad(datosSalida.producto, newCantidad) } // TODO: agregar verificacion de inventario
                                value={( datosSalida.cantidad.toString() )}
                                keyboardType="numeric"
                            />
                        </Box>
                    </HStack>
                </Surface>
            )}

        </VStack>
        </ScrollView>
>>>>>>> main
    );
};

export default Resumen;