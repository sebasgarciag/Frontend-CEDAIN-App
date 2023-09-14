import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavBar from "../src/components/UI/NavBar";
import BotonASC from "../src/components/UI/BotonASC";


const Home = () => { 
    return ( 
    <SafeAreaProvider> 
        <View> 
            <NavBar/>
            <BotonASC 
                textoBoton1="Entrada" 
                textoBoton2="Salida" 
            />
        </View> 
    </SafeAreaProvider> ) }

export default Home;
