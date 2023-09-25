import React from 'react';
import { View, Text} from 'react-native';
import { Box, VStack } from "@react-native-material/core";
import { ScrollView } from "react-native-gesture-handler";
import ProductoCarrito from "../../components/entradasSalidas/productoCarrito";
import useCarrito from "./hookProductoCarrito";
<<<<<<< HEAD
import { Surface } from 'react-native-paper';
import { VolverButton } from '../../components/UI/uiButtons';
import buttonStyles from "../../assets/buttons/styles";
import styles from '../../assets/styles';
import { VolverButtonN } from "../../components/UI/uiButtons";
import { SiguienteButtonN } from "../../components/UI/uiButtons";
import { useNavigation } from '@react-navigation/native';
import useCurrentScreen from "../../components/UI/useCurrentScreen";
=======
>>>>>>> main

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
    </VStack>
    </ScrollView>
<<<<<<< HEAD
    <View style={ buttonStyles.containerNavegacion }>
        <VolverButtonN navigation={navigation} path={"CrearSalida"}/>
        <SiguienteButtonN navigation={navigation} path={"InfoDestinoN"}/>
    </View>
    </View>
=======
>>>>>>> main
);

};

export default ArticulosCarrito;
