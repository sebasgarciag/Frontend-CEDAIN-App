<<<<<<< HEAD
import { Spacer, VStack, HStack } from "@react-native-material/core";
import { React } from 'react';
import Dropdowns from "../../components/UI/dropDownE";
import Textbox from "../../components/UI/textBox";
import { ScrollView } from "react-native-gesture-handler";
import useInfoDestinoEvento from "./hookInfoDestinoEvento";
import { View, Text } from "react-native";
import buttonStyles from "../../assets/buttons/styles";
import styles from "../../assets/styles";
import { VolverButtonN } from "../../components/UI/uiButtons";
import { SiguienteButtonN } from "../../components/UI/uiButtons";
import { useNavigation } from '@react-navigation/native';

const Paginfo = () => { 
    const { comunidades, eventos, comunidad, evento, 
        setComunidad, setEvento, comentarios, setComentarios, 
        receptor, setReceptor } = useInfoDestinoEvento();

    const navigation = useNavigation();
=======
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
>>>>>>> main
    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);};
    return ( 
    
<<<<<<< HEAD
        <View style={styles.container}>
    
        <ScrollView>
        
            <HStack style={styles.titulosContainer}>
                <Text  style={styles.headerText}>Informacion de Destino</Text>
            </HStack>
            <VStack spacing={20} style={{padding: 10}}> 


                <Dropdowns
                    setValueEvento={setComunidad} 
                    dataDropDownEvento={comunidades}
                    valueEvento={comunidad}
                    Titulo={"Comunidad"}/>

                <Dropdowns
                    setValueEvento={setEvento} 
                    dataDropDownEvento={eventos}
                    valueEvento={evento}
                    Titulo={"Evento"}/>

                <Spacer/>
                
                
                <Textbox
                    text={comentarios} 
                    setText={setComentarios}
                    placeholder={'Comentarios'}
                    title={'Comentarios'}
                />

                <Spacer/>

                <Textbox
                    text={receptor} 
                    setText={setReceptor}
                    placeholder={'Receptor'}
                    title={'Receptor'}
                />


            </VStack>
            </ScrollView> 
            <View style={ buttonStyles.containerNavegacion }>
                    <VolverButtonN navigation={navigation} path={"Carrito"} />
                    <SiguienteButtonN navigation={navigation} path={"ResumenSalida"} />
            </View>
    

        
        </View>

=======
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
>>>>>>> main
)}

export default Paginfo;