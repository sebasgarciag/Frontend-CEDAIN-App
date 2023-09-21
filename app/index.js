import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Paginfo from "./infoDestino";

const Home = () => { 
    return ( 

    <SafeAreaProvider> 
        <View> 
            <Paginfo/> 
        </View> 
    </SafeAreaProvider>    

    )
}

export default Home;
