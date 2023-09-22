import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Home = () => { 
    return ( 

    <SafeAreaProvider> 
        <View> 
            <Text>Home</Text>
        </View> 
    </SafeAreaProvider>    

    )
}

export default Home;
