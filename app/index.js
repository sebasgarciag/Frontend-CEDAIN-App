import React, { useState } from 'react';
import { View, Text, Pressable } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Button, Stack } from "@react-native-material/core";

const Home = () => {
    const [showAdiseButtons, setShowAdiseButtons] = useState(false);
    const [showEq2Buttons, setShowEq2Buttons] = useState(false);
    const [showChernobylButtons, setShowChernobylButtons] = useState(false);

    return (
        <SafeAreaProvider>
            <Stack fill center spacing={20}>

                {/* PARA QUE LOS REDIRIJA A SU PAGINA CAMBIEN EL "/" POR EL NOMBRE DEL ARCHIVO DE SU PAGINA PRINCIPAL */}

                <Button
                    title="chernobyl"
                    onPress={() => setShowChernobylButtons(!showChernobylButtons)}
                />

                {showChernobylButtons && (
                    <>
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
                            onPress={() => router.replace("/")}
                        />
                        <Button
                            title="Chernobyl - Editar Usuario"
                            onPress={() => router.replace("/editarUsuario")}
                        />
                        <Button
                            title="Chernobyl - Editar Producto"
                            onPress={() => router.replace("/editarProducto")}
                        />
                        <Button
                            title="Chernobyl - Listado productos"
                            onPress={() => router.replace("/listadoProductos")}
                        />
                    </>
                )}

                <Button
                    title="adise"
                    onPress={() => setShowAdiseButtons(!showAdiseButtons)}
                />
                <Button
                    title="Eq2"
                    onPress={() => setShowEq2Buttons(!showEq2Buttons)}
                />

                {showEq2Buttons && (
                    <>
                        <Button
                            title="Eq2 Inventario"
                            onPress={() => router.replace("/inventario")}
                        />
                        <Button
                            title="eq2 editar inventario"
                            onPress={() => router.replace("/editarInventario")}
                        />

                        <Button
                            title="eq2 decidir inventario"
                            onPress={() => router.replace("/decidirInventario")}
                        />
                    </>
                )}
                {showAdiseButtons && (
                    <>
                        <Button
                            title="adise - entradaAlm"
                            onPress={() => router.replace("/entradaAlm")}
                        />
                        <Button
                            title="adise - entradaAdmin"
                            onPress={() => router.replace("/entradaAdmin")}
                        />
                        <Button
                            title="adise - listadoEntradasAdmin"
                            onPress={() => router.replace("/listadoEntradasAdmin")}
                        />
                        <Button
                            title="adise - listadoEntradasAlm"
                            onPress={() => router.replace("/listadoEntradasAlm")}
                        />
                        <Button
                            title="adise - listadoSalidasAdmin"
                            onPress={() => router.replace("/listadoSalidasAdmin")}
                        />
                        <Button
                            title="adise - listadoSalidasAlm"
                            onPress={() => router.replace("/listadoSalidasAlm")}
                        />
                        <Button
                            title="adise - salidaAdmin"
                            onPress={() => router.replace("/salidaAdmin")}
                        />
                        <Button
                            title="adise - salidaAlm"
                            onPress={() => router.replace("/salidaAlm")}
                        />
                    </>
                )}





                <Button
                    title="ced"
                    onPress={() => router.replace("/infoDestino")}
                />
            </Stack>
        </SafeAreaProvider>
    )
}

export default Home;
