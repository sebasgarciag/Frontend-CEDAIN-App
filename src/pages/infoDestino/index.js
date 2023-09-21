import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Box, HStack, Spacer, Stack, VStack } from "@react-native-material/core";
import DropdownC from "../../components/UI/dropDownC";
import DropdownE from "../../components/UI/dropDownE";
import BotonASC from "../../components/UI/BotonASC";
import TextboxComentario from "../../components/UI/textBoxComentario";
import TextboxReceptor from "../../components/UI/textBoxReceptor";
import NavBar from "../../components/UI/NavBar"
import { ScrollView } from "react-native-gesture-handler";





const Paginfo = () => { 
    return ( 
    
    <ScrollView>
        <NavBar/>
        <VStack spacing={20} style={{padding: 10}}>  
            <DropdownC/>
            <DropdownE/>
            <Spacer/>
            <TextboxComentario/>
            <Spacer/>
            <TextboxReceptor/>
        </VStack>
        <BotonASC textoBoton1={"Cancelar"}textoBoton2={"Siguiente"}/>
    </ScrollView> 
)}

export default Paginfo;