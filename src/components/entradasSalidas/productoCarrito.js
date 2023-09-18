import React from 'react';
import { View, Text, TextInput, Image} from 'react-native';
import { Card, IconButton } from 'react-native-paper';
import { Box} from "@react-native-material/core";

const ProductoCarrito = ({ producto, aumentarCantidad, disminuirCantidad, handleCantidad, handleExpandirInfo }) => {
    const { nombre, imagen, cantidad, expandirInfo, tamaño, precio, categoría, nombreCorto } = producto;

    return (
      <Card style={{ margin: 10, padding: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={imagen}
            style={{ width: "25%", aspectRatio: 1, borderRadius: 10 }}
          />
          <View style={{ flex: 2, flexDirection: 'column',  flexWrap: 'wrap', marginLeft: 10, alignItems: 'center' }}>
          <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10, alignItems: 'center', justifyContent: 'space-between'}}>
            <View> 
              <Text style={{ color: "black", fontSize: 13, fontWeight: "bold", marginLeft: 10 }}>{nombre}</Text>
            </View>
          
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <IconButton
                icon="minus"
                size={20}
                onPress={() =>disminuirCantidad(producto)}
              />
              <Box style={{}}>
                <TextInput 
                    style={{ textAlign: "center", textAlignVertical: "bottom", fontSize: 20, fontWeight: "bold" }} 
                    defaultValue="0"
                    onChangeText={ newCantidad => handleCantidad(producto, newCantidad) } // TODO: agregar verificacion de inventario
                    value={( cantidad.toString() )}
                    keyboardType="numeric"
                />
              </Box>
              <IconButton
                icon="plus"
                size={20}
                onPress={() => aumentarCantidad(producto)}
              />
            </View>
          </View>
          <View style={{ alignItems: 'flex-start'}}>
          <IconButton 
              icon={expandirInfo ? "arrow-up" : "arrow-down"} // Cambia el icono en función del estado
              size={20}
              onPress={() => handleExpandirInfo(producto)} 
            />

        {expandirInfo && ( // Mostrar información adicional solo si expandirInfo es verdadero
          <View>
            <Text>Tamaño: {tamaño}</Text>
            <Text>Precio: {precio}</Text>
            <Text>Categoría: {categoría}</Text>
            <Text>Nombre Corto: {nombreCorto}</Text>
          </View>
        )}
        </View>
        </View>
        </View>
      </Card>
    );
  };
  
  export default ProductoCarrito;