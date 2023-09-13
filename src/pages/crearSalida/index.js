import React from "react";
import { Text, ScrollView, Image, Pressable } from "react-native";
import { Spacer, HStack, VStack, Box } from "@react-native-material/core";
import { FAB } from "react-native-paper";
import useSeleccion from "./hookSeleccionProducto";

const SeleccionProductos = () => { 

    const { productos, categorias } = useSeleccion();


    return (

        <ScrollView>
        {categorias.map((categoria) =>


            <VStack spacing={20} key={categoria}>

                    <Text style={{fontSize: 20}}>{categoria}</Text>

                    <ScrollView horizontal>
                        <HStack divider={true} spacing={10}>
                            {productos.filter(producto => producto.categoria === categoria).map((producto) => 
                                <Box w={96} key={producto.idProducto}>

                                    <Pressable onPress={() => console.log('pressed' + producto.idProducto)}>
                                        <Image 
                                            source={require('../../assets/imagenes/ware.jpg')}
                                            style={{width: 96, height: 96, borderRadius: 10}}
                                        />
                                    </Pressable>
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