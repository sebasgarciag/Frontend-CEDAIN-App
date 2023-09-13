import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavBar from "../src/components/UI/NavBar";
import BotonASC from "../src/components/UI/BotonASC";


const Home = () => { 
    return ( 
    <SafeAreaProvider> 
        <View> 
            <BotonASC/>{/* Borrar esto solo prueba */}
        </View> 
    </SafeAreaProvider> ) }

export default Home;
