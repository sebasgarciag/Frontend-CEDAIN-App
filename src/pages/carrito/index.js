import React from 'react';
import { View, Text} from 'react-native';
import { Box, VStack } from "@react-native-material/core";
import { ScrollView } from "react-native-gesture-handler";
import ProductoCarrito from "../../components/entradasSalidas/productoCarrito";
import TotalProductos from '../../components/entradasSalidas/totalProductos';
import useCarrito from "./hookProductoCarrito";
import { Surface } from 'react-native-paper';

const ArticulosCarrito = () => {  

    const {carrito, handleCantidad, aumentarCantidad, disminuirCantidad, handleExpandirInfo} = useCarrito();

return (
    <ScrollView>
    <VStack style={{ padding: 10 }} spacing={20}>

        <Box style={{ backgroundColor: "#8F8B36", padding: 10, borderRadius: 10 }}>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "bold", textAlign: 'center' }}>Productos Seleccionados</Text>
        </Box>

        <View style={{ flex: 1 }}>
            {carrito.map((producto) => (
            <ProductoCarrito
                key={producto.id}
                producto={producto}
                aumentarCantidad={aumentarCantidad}
                disminuirCantidad={disminuirCantidad}
                handleCantidad={handleCantidad}
                handleExpandirInfo={handleExpandirInfo}
            />
            ))}
        </View>
        <Surface style={{
            width: '35%',
            padding: 16,
            borderRadius: 10,
            alignItems: "center"
        }}>
            <TotalProductos carrito={carrito}/>
        </Surface>
    </VStack>
    </ScrollView>
);

};

export default ArticulosCarrito;
