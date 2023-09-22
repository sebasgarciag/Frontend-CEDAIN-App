import { Spacer, VStack,HStack } from "@react-native-material/core";
import { React, useState } from 'react';
import Menulateral from "../../components/UI/MenuLateral";
import DropdownE from "../../components/UI/dropDownE";
import TextboxComentario from "../../components/UI/textBoxComentario";
import TextboxReceptor from "../../components/UI/textBoxReceptor";
import NavBar from "../../components/UI/NavBar"
import { ScrollView } from "react-native-gesture-handler";
import useInfoDestinoEvento from "./hookInfoDestinoEvento";
import { VolverButton } from "../../components/UI/uiButtons";
import { View, Text } from "react-native";
import buttonStyles from "../../assets/buttons/styles";
import styles from "../../assets/styles";
import MenuHamburguesa from '../../components/UI/MenuHambuguesa';

const Paginfo = () => { 
    const{ setValueEvento, dataDropDownEvento, valueEvento } = useInfoDestinoEvento();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);};
    
    return ( 
    <View style={styles.container}>
    <ScrollView>
        <MenuHamburguesa toggleDrawer={toggleDrawer}/>
        <Menulateral isDrawerOpen={isDrawerOpen} />
        <HStack style={styles.headerContainerOnlyText}>
            <Text  style={styles.headerText}>Informacion de Destino</Text>
        </HStack>
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

        <View style={ buttonStyles.containerNavegacion }>
                <VolverButton path={"carrito"} />
                <VolverButton path={"resumenSalida"} />
        </View>

    </ScrollView> 
    </View>
)}

export default Paginfo;