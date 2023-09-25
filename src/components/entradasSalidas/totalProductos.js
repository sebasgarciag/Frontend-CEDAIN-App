import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
const TotalProductos = ({ carrito }) => {
  const [total, setTotal] = useState(0);

  // Utiliza useEffect para calcular el total inicial y actualizarlo cuando cambien las cantidades
  useEffect(() => {
    const calcularTotalProductos = () => {
      return carrito.reduce((total, producto) => total + producto.cantidad, 0);
    };

    setTotal(calcularTotalProductos());
  }, [carrito]);

  return (
    <View style={{ }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Total: {total}</Text>
    </View>
  );
};
export default TotalProductos;