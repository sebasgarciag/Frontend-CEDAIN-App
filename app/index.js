import React, { useState } from 'react';
import { View, Text, Pressable } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Button, Stack } from "@react-native-material/core";

const Home = () => { 
    const [showAdiseButtons, setShowAdiseButtons] = useState(false);

    return ( 
    <SafeAreaProvider> 
        <Stack fill center spacing={20}>

            {/* PARA QUE LOS REDIRIJA A SU PAGINA CAMBIEN EL "/" POR EL NOMBRE DEL ARCHIVO DE SU PAGINA PRINCIPAL */}
            
            <Button
                title="chernobyl"
                onPress={() => router.replace("/")}
            />
            <Button
                title="eq2"
                onPress={() => router.replace("/inventario")}
            />
            <Button
                title="adise"
                onPress={() => setShowAdiseButtons(!showAdiseButtons)}
            />
            
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
