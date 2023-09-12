import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-material-ui';
import {Stack} from 'expo-router';

const EntradaAlm = () => {
  return (
    <>
        <Stack.Screen options={{title: "Entrada alamcenista"}}/>
        <View style={styles.container}>
            <Text>Entrada almacenista</Text>
        </View>
    </>
    
  );
};

const styles = StyleSheet.create({});

export default EntradaAlm;