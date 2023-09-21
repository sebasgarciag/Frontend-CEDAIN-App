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
          <View style={{ flex: 1, flexDirection: 'column',  marginLeft: 10 }}>
          <View style={{ flex: 1, flexDirection: 'row', marginLeft: 10, alignItems: 'center', justifyContent: 'space-between'}}>
            <View> 
              <Text style={{ color: "black", fontSize: 13, fontWeight: "bold", marginLeft: 10 }}>{nombre}</Text>
            </View>
          
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

              <View >
              <IconButton
                icon="minus"
                size={20}
                onPress={() =>disminuirCantidad(producto)}
              />
              </View>

              <View>
              <Box style={{}}>
                <TextInput 
                    style={{ textAlign: "center", textAlignVertical: "bottom", fontSize: 20, fontWeight: "bold" }} 
                    defaultValue="0"
                    onChangeText={ newCantidad => handleCantidad(producto, newCantidad) } // TODO: agregar verificacion de inventario
                    value={( cantidad.toString() )}
                    keyboardType="numeric"
                />
              </Box>
              </View>

              <View>
              <IconButton
                icon="plus"
                size={20}
                onPress={() => aumentarCantidad(producto)}
              />
              </View>

            </View>
          </View>
          <View>
            <View style={{ alignItems: 'center'}}>
              <IconButton 
                icon={expandirInfo ? "chevron-up" : "chevron-down"} // Cambia el icono en función del estado
                size={20}
                onPress={() => handleExpandirInfo(producto)} 
                color='#8F8B36'
              />
            </View >
            {expandirInfo && ( // Mostrar información adicional solo si expandirInfo es verdadero
            <View style={{ marginLeft: 15}}>
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