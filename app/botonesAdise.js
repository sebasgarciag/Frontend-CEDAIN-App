import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Button, Stack } from "@react-native-material/core";

const Adise = () => {

    return (
        <SafeAreaProvider> 
        <Stack fill center spacing={20}>
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
        </Stack>
        </SafeAreaProvider> 
    )
}
export default Adise;