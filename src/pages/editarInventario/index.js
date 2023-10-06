import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { ArrowButton } from '../../components/inventario/buttons';
import styles from '../../assets/buttons/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { router } from 'expo-router';
import { useRoute } from '@react-navigation/native'; 
import { useNavigation } from '@react-navigation/native';


const EditProductScreen = ({object}) => {

  const route = useRoute();
  const inventario = route.params.object;
  const navigation = useNavigation()
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('1');

  const handleSave = () => {
    alert('Cambios guardados (no implementado)');
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => (parseInt(prevQuantity) + 1).toString());
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = parseInt(prevQuantity) - 1;
      return newQuantity > 0 ? newQuantity.toString() : '1';
    });
  };

  console.log("objeectsholahoaljsda: " +object);
  return (
    <View style={[styles.container, { padding: 20, backgroundColor: '#F1EFE3' }]}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 }}>
        <Text style={{ fontSize: 26 }}>Editar Producto</Text>
        <ArrowButton navigation={navigation} path={"Inventario"} />
      </View>

      <View style={{ marginBottom: 30 }}>
    <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Nombre del producto:</Text>
    <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 15, backgroundColor: '#fff', padding: 10, borderRadius: 10 }}> {inventario.producto.nombre}</Text>
    <Text style={{ fontSize: 26, fontWeight: 'bold' }}>Tamaño:</Text>
    <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 15, backgroundColor: '#fff', padding: 10, borderRadius: 10 }}> {inventario.producto.Tamanio.descripcion}</Text>
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
  );
};

export default EditProductScreen;