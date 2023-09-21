import { View, Text, Pressable } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Button, Stack } from "@react-native-material/core";

const Home = () => { 
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
                onPress={() => router.replace("/")}
            />
            <Button
                title="ced"
                onPress={() => router.replace("/resumenSalida")}
            />
        </Stack> 
    </SafeAreaProvider>
    )
}

export default Home;