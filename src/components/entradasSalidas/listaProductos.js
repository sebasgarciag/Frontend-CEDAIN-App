import React from "react";
import { Text, ScrollView, Image, Pressable } from "react-native";
import { Spacer, HStack, VStack, Box } from "@react-native-material/core";
import { Surface } from "react-native-paper";
import useCarrito from "../../pages/carrito/hookProductoCarrito";
import { useState } from "react";
import ipApi from "../../apis/ipApi";

const { ip, protocol, port } = ipApi;
const baseUrl = `${protocol}${ip}:${port}`;


function ListaProductos({ productos, categorias, carrito, handleCarrito }) { 

    const [productosSeleccionados, setProductosSeleccionados] = useState([]);

    const toggleProductoSeleccionado = (producto) => {
      if (productosSeleccionados.includes(producto)) {
        // Si el producto ya está seleccionado, lo eliminamos de la lista
        setProductosSeleccionados(productosSeleccionados.filter((p) => p !== producto));
      } else {
        // Si el producto no está seleccionado, lo agregamos a la lista
        setProductosSeleccionados([...productosSeleccionados, producto]);
      }
    };

    return (
        <ScrollView>
        {categorias.map((categoria) =>

            <VStack spacing={20} key={categoria.id_categoria}>

                <Text style={{fontSize: 20}}>{categoria.nombre}</Text>

                <ScrollView horizontal>
                    <HStack spacing={10}>

                        {productos.filter(producto => producto.producto.id_categoria === categoria.id_categoria && producto.cantidad > 0).map((producto) => 
                            <Box key={producto.id_producto} style={{margin: 8}}>

                                <Pressable onPress={() => { handleCarrito(producto), toggleProductoSeleccionado(producto)}}>

                                    <Surface
                                        elevation={5}
                                        style={{
                                        borderRadius: 10,
                                        marginBottom: 8,
                                        padding: 4,
                                        borderColor: productosSeleccionados.includes(producto) ? '#59CD90' : 'transparent',
                                        borderWidth: 5,
                                    }}
                                    > 
                                        <Image 
                                            source={ producto.producto.imagen ? { uri: `${baseUrl}/productos/${producto.producto.id_producto}/image?${new Date().getTime()}`} :  require('../../assets/imagenes/no-image.jpg')} // TODO: cambiar por imagen del producto
                                            style={{width: 96, height: 96, borderRadius: 10}}
                                        />
                                    </Surface>
                                    
                                </Pressable>
                                <Text>{producto.producto.nombre}</Text>
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