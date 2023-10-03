import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Button, Stack } from "@react-native-material/core";
import { VolverButton } from '../src/components/UI/uiButtons';
import { NavigationContainer } from '@react-navigation/native'
import Menulateral from '../src/components/UI/MenuLateral'

const Chernobyl = () => {

    return (
        <SafeAreaProvider> 
        <Stack fill center spacing={20}>
            <Button
                title="Chernobyl - Login"
                onPress={() => router.replace("/logInn")}
            />
            <Button
                title="Chernobyl - Sign Up"
                onPress={() => router.replace("/signUp")}
            />
            <Button
                title="Chernobyl - Productos"
                onPress={() => router.replace("/listadoProductos")}
                />
            <Button
                title="Chernobyl - Dar de Alta Producto"
                onPress={() => router.replace("/altaProducto")}
                />
            <Button
                title="Chernobyl - Editar Producto"
                onPress={() => router.replace("/editarProducto")}
                />
            <Button
                title="Chernobyl - Listado Usuarios"
                onPress={() => router.replace("/listadoUsuarios")}
            />
            <VolverButton ruta="/" />
        </Stack>
        </SafeAreaProvider> 
    )
}
export default Chernobyl;