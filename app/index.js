import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavBar from "../src/components/UI/NavBar";
import ArticulosCarrito from "../src/pages/carrito/index";


const Home = () => { 
    return ( 
    <SafeAreaProvider> 
        <View> 
            <ArticulosCarrito/>{/* Borrar esto solo prueba */}<Paginfo/>
        </View> 
    </SafeAreaProvider> ) }

export default Home;
