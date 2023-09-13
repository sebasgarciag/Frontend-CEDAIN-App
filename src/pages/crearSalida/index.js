import React from "react";
import { View, Text, ScrollView } from "react-native";
import { Spacer, HStack, VStack, Box, Flex } from "@react-native-material/core";
import { FAB } from "react-native-paper";
import useSeleccion from "./hookSeleccionProducto";

const SeleccionProductos = () => { 

    const { productos, categorias } = useSeleccion();


    return (

        <ScrollView>
        {categorias.map((categoria) =>


            <VStack divider={true} spacing={20} key={categoria}>

                    <Text>{categoria}</Text>
                    <ScrollView horizontal>
                        <HStack divider={true} spacing={10}>

                            {productos.filter(producto => producto.categoria === categoria).map((producto) => 
                                <Box w={96} key={producto.idProducto}>
                                    <FAB 
                                        icon="plus"
                                        size="large"
                                        onPress={() => console.log('Pressed' + producto.idProducto)}
                                    />
                                    <Text>{producto.nombreProducto}</Text>
                                </Box>)
                            }

                        </HStack>
                    </ScrollView>
                <Spacer />





            </VStack>
            )}

    </ScrollView>

    );
};

export default SeleccionProductos;