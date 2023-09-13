import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import NavBar from "../src/components/UI/NavBar";


const Home = () => { 
    return ( 
    <SafeAreaProvider> 
        <View> 
            <NavBar/>
        </View> 
    </SafeAreaProvider> ) }

export default Home;
