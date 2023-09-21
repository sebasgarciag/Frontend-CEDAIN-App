import { View, Text } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Box, HStack, Spacer, Stack, VStack } from "@react-native-material/core";
import React, { useState } from 'react';
import Menulateral from "../../components/UI/MenuLateral";
import DropdownE from "../../components/UI/dropDownE";
import BotonASC from "../../components/UI/BotonASC";
import TextboxComentario from "../../components/UI/textBoxComentario";
import TextboxReceptor from "../../components/UI/textBoxReceptor";
import NavBar from "../../components/UI/NavBar"
import { ScrollView } from "react-native-gesture-handler";
import useInfoDestinoEvento from "./hookInfoDestinoEvento";





const Paginfo = () => { 
    const{ setValueEvento, dataDropDownEvento, valueEvento } = useInfoDestinoEvento();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);};
    return ( 
    
    <ScrollView>
        <NavBar toggleDrawer={toggleDrawer}/>
        <Menulateral isDrawerOpen={isDrawerOpen} />
        <VStack spacing={20} style={{padding: 10}}> 
            <DropdownE 
                setValueEvento={setValueEvento} 
                dataDropDownEvento={dataDropDownEvento}
                valueEvento={valueEvento}
                Titulo={"Comunidad"}/>

            <DropdownE 
                setValueEvento={setValueEvento} 
                dataDropDownEvento={dataDropDownEvento}
                valueEvento={valueEvento}
                Titulo={"Evento"}/>
            <Spacer/>
            <TextboxComentario/>
            <Spacer/>
            <TextboxReceptor/>
        </VStack>
        <BotonASC textoBoton1={"Cancelar"}textoBoton2={"Siguiente"}/>
    </ScrollView> 
)}

export default Paginfo;