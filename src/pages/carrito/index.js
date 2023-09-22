import React from 'react';
import { View, Text} from 'react-native';
import { Box, VStack } from "@react-native-material/core";
import { ScrollView } from "react-native-gesture-handler";
import ProductoCarrito from "../../components/entradasSalidas/productoCarrito";
import useCarrito from "./hookProductoCarrito";
import BotonASC from '../../components/UI/BotonASC';

const ArticulosCarrito = () => {  

    const {carrito, handleCantidad, aumentarCantidad, disminuirCantidad, handleExpandirInfo} = useCarrito();

return (
    <>
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
    </VStack>
    </ScrollView>
    <BotonASC textoBoton1={"Anterior"} textoBoton2={"Siguiente"} direccion1={"crearSalida"} direccion2={"infoDestino"}/>
    </>
);

};

export default ArticulosCarrito;
