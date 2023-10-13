import React from "react";
import { Text, ScrollView, Image, Pressable } from "react-native";
import { Spacer, HStack, VStack, Box } from "@react-native-material/core";
import { Surface } from "react-native-paper";
import useCarrito from "../../pages/carrito/hookProductoCarrito";
import { useState } from "react";


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


    // {"cantidad": 10, "id_almacen": 1, "id_inventario": 1, "id_producto": 1, "producto": {"Tamanio": null, "id_categoria": null, "id_producto": 1, "id_tamanio": null, "medida": null, "nombre": null, "nombre_corto": null, "precio_trueque": null, "precio_venta": null}}



    return (
        <ScrollView>
        {categorias.map((categoria) =>

            <VStack spacing={20} key={categoria.id_categoria}>

                <Text style={{fontSize: 20}}>{categoria.nombre}</Text>

                <ScrollView horizontal>
                    <HStack spacing={10}>

                        {productos.filter(producto => producto.producto.id_categoria === categoria.id_categoria).map((producto) => 
                            <Box key={producto.id_producto} style={{margin: 8}}>

                                {/* TODO: funcion para anadir a carrito */}
                                <Pressable onPress={() => {console.log('pressed' + producto.producto.id_producto), handleCarrito(producto), toggleProductoSeleccionado(producto)}}>

                                    {/* TODO: cambiar colores */}
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
                                            source={require('../../assets/imagenes/ware.jpg')} // TODO: cambiar por imagen del producto
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