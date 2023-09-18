import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavBar from "../src/components/UI/NavBar";
import BotonASC from "../src/components/UI/BotonASC";
import DropdownC from "../src/components/UI/dropDownC";
import DropdownE from "../src/components/UI/dropDownE";


const Home = () => { 
    return ( 
    <SafeAreaProvider> 
        <View> 
            <NavBar/>
            <DropdownC/>
            <DropdownE/>
            <BotonASC 
                textoBoton1="Entrada" 
                textoBoton2="Salida" 
            />
        </View> 
    </SafeAreaProvider> ) }

export default Home;
