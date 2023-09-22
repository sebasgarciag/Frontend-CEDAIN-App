import { Spacer, VStack, HStack } from "@react-native-material/core";
import { React, useState } from 'react';
import DropdownE from "../../components/UI/dropDownE";
import TextboxComentario from "../../components/UI/textBoxComentario";
import TextboxReceptor from "../../components/UI/textBoxReceptor";
import { ScrollView } from "react-native-gesture-handler";
import useInfoDestinoEvento from "./hookInfoDestinoEvento";
import { VolverButton } from "../../components/UI/uiButtons";
import { View, Text } from "react-native";
import buttonStyles from "../../assets/buttons/styles";
import styles from "../../assets/styles";

const Paginfo = () => { 
    const{ setValueEvento, dataDropDownEvento, valueEvento } = useInfoDestinoEvento();

    return ( 
    <View style={styles.container}>
    <ScrollView>
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
    </ScrollView> 
    <View style={ buttonStyles.containerNavegacion }>
        <VolverButton path={"carrito"} />
        <VolverButton path={"resumenSalida"} />
    </View>
    </View>
)}

export default Paginfo;