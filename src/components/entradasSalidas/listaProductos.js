import React from "react";
import { Text, ScrollView, Image, Pressable } from "react-native";
import { Spacer, HStack, VStack, Box } from "@react-native-material/core";
import { Surface } from "react-native-paper";


function ListaProductos({ productos, categorias }) { 

    return (
        <ScrollView>
        {categorias.map((categoria) =>

            <VStack spacing={20} key={categoria}>

                <Text style={{fontSize: 20}}>{categoria}</Text>

                <ScrollView horizontal>
                    <HStack spacing={10}>

                        {productos.filter(producto => producto.categoria === categoria).map((producto) => 
                            <Box key={producto.idProducto} style={{margin: 8}}>

                                {/* TODO: funcion para anadir a carrito */}
                                <Pressable onPress={() => console.log('pressed' + producto.idProducto)}>

                                    {/* TODO: cambiar colores */}
                                    <Surface elevation={5} style={{borderRadius: 10, marginBottom: 8, padding: 4}}> 
                                        <Image 
                                            source={require('../../assets/imagenes/ware.jpg')} // TODO: cambiar por imagen del producto
                                            style={{width: 96, height: 96, borderRadius: 10}}
                                        />
                                    </Surface>
                                    
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

export default ListaProductos;