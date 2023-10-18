import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { ArrowButton, ArrowButtonAlmacen } from '../../components/inventario/buttons';
import styles from '../../assets/buttons/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { useRoute } from '@react-navigation/native'; 
import { useNavigation } from '@react-navigation/native';
import useEditarInventario from './useEditarInventario';

/**
 * `EditProductScreen` es un componente funcional de React que proporciona una interfaz de usuario
 * para editar los detalles de un producto en el inventario.
 *
 * @param {Object} props - Las propiedades pasadas a este componente.
 * @param {Object} props.object - Un objeto que contiene la información del producto.
 *
 * @example
 * return (
 *   <EditProductScreen object={producto} />
 * );
 */

const EditProductScreen = ({object}) => {

  // Obtiene los parámetros de la ruta actual utilizando el hook `useRoute` de `@react-navigation/native`.
  const route = useRoute();

  // Almacena la información del producto obtenida de los parámetros de la ruta.
  const inventario = route.params.object;
  // Proporciona la navegación entre pantallas utilizando el hook `useNavigation` de `@react-navigation/native`.
  const navigation = useNavigation();

  // Define y maneja el estado local `name` para el nombre del producto (sin uso actual en el código proporcionado).
  const [quantity, setQuantity] = useState(inventario.cantidad);

  // Define y maneja el estado local `quantity` para la cantidad del producto, inicializado con la cantidad del producto en el inventario.
  const { updateInventario,resultado } = useEditarInventario();

  useEffect(() => {
    // Resetea la cantidad cuando el objeto cambie
    setQuantity(inventario.cantidad);
  }, [inventario]);

    /**
   * Maneja la acción de guardar los cambios realizados en el producto.
   * Actualmente, muestra una alerta de confirmación; es posible que desees expandir esta función para implementar la lógica de actualización real.
   */


  const handleSave = () => {
    updateInventario(inventario.id_inventario,quantity)
    navigation.navigate(`Inventario`, inventario.id_almacen);
  };

  /**
   * Incrementa la cantidad del producto en el estado `quantity` en uno.
   */

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity+1));
  };

/**
   * Disminuye la cantidad del producto en el estado `quantity` en uno, asegurando que la cantidad no sea menor a uno.
   */


  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity-1));
  };

/**
 * Renderiza la interfaz de usuario para la pantalla de edición de producto.
 * 
 * Este método devuelve JSX que constituye la interfaz de usuario para la pantalla de edición de producto. Incluye campos para mostrar y editar 
 * diversos atributos del producto como el nombre, tamaño, medidas y precios. También proporciona botones para incrementar o decrementar la 
 * cantidad del producto y un botón para guardar los cambios.
 * 
 * @returns {JSX.Element} La interfaz de usuario para la pantalla de edición de producto.
 */

  return (
        // Contenedor principal para la pantalla de edición del producto

  
        <ScrollView>
    <View style={[styles.container, { padding: 20, backgroundColor: '#F1EFE3' }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
        <Text style={{ fontSize: 26 }}>Editar Producto</Text>
        <ArrowButtonAlmacen navigation={navigation} path={"Inventario"} almacen ={inventario.id_almacen}/>
      </View>

      <View style={{ marginBottom: 30 }}>
        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Nombre del producto:</Text>
        <Text style={{ fontSize: 24,  marginTop: 15, backgroundColor: '#fff', padding: 10, borderRadius: 10 }}>{inventario.producto.nombre}</Text>
        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Tamaño:</Text>
        <Text style={{ fontSize: 24,  marginTop: 15, backgroundColor: '#fff', padding: 10, borderRadius: 10 }}>{inventario.producto.Tamanio.descripcion}</Text>
        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Medida:</Text>
        <Text style={{ fontSize: 24,  marginTop: 15, backgroundColor: '#fff', padding: 10, borderRadius: 10 }}>{inventario.producto.medida}</Text>
        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Precio de Venta:</Text>
        <Text style={{ fontSize: 24,  marginTop: 15, backgroundColor: '#fff', padding: 10, borderRadius: 10 }}>{inventario.producto.precio_venta}</Text>
        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Precio de Trueque:</Text>
        <Text style={{ fontSize: 24,  marginTop: 15, backgroundColor: '#fff', padding: 10, borderRadius: 10 }}>{inventario.producto.precio_trueque}</Text>
        <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Nombre Corto:</Text>
        <Text style={{ fontSize: 24,  marginTop: 15, backgroundColor: '#fff', padding: 10, borderRadius: 10 }}>{inventario.producto.nombre_corto}</Text>
      </View>
      
      <View style={{ marginBottom: 30 }}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>Cantidad:</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 10, padding: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4 }}>
          <TouchableOpacity onPress={decrementQuantity} style={{ marginRight: 10 }}>
            <Icon name="remove-circle-outline" size={24} color="#333" />
          </TouchableOpacity>
          <TextInput
            style={{ flex: 1, fontSize: 16, textAlign: 'center' }}
            value={quantity}
            onChangeText={setQuantity}
            keyboardType="numeric"
            placeholder="Ingrese la cantidad"
          />
          <TouchableOpacity onPress={incrementQuantity} style={{ marginLeft: 10 }}>
            <Icon name="add-circle-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <TouchableOpacity style={{ backgroundColor: '#59CD90', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 30, flexDirection: 'row', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.23, shadowRadius: 2.62, elevation: 4 }} onPress={handleSave}>
          <Icon name="check-circle" size={24} color="#F1EFE3" style={{ marginRight: 10 }} />
          <Text style={{ fontSize: 18, color: '#F1EFE3' }}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

/**
 * @module EditProductScreen
 * @description Exporta `EditProductScreen` como el componente predeterminado de este módulo, 
 * proporcionando una pantalla para editar los detalles de un producto en el inventario.
 */

export default EditProductScreen;