import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-material-ui';
import {Stack} from "expo-router";
import { UserButton } from '../../components/UI/uiButtons';

const ListadoEntradasAdmin = () => {
  return (
    <>
        <Stack.Screen options={{title: "Listado Entradas Administrador"}}/>
        <View>
            <UserButton />
        </View>
    </>
  );
};

const styles = StyleSheet.create({});

export default ListadoEntradasAdmin;