import React from 'react';
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Button, Stack } from "@react-native-material/core";

const Eq2 = () => {

    return (
        <SafeAreaProvider> 
        <Stack fill center spacing={20}>
            <Button
                title="Eq2 Inventario"
                onPress={() => router.replace("/inventario")}
            />
            <Button
                title="eq2 editar inventario"
                onPress={() => router.replace("/editarInventario")}
            />
        </Stack>
        </SafeAreaProvider> 
    )
}
export default Eq2;