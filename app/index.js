import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Paginfo from "../src/pages/infoDestino/index"




const Home = () => { 
    return ( 
    <SafeAreaProvider> 
        <View> 
            <Paginfo/>
        </View> 
    </SafeAreaProvider> ) }

export default Home;
