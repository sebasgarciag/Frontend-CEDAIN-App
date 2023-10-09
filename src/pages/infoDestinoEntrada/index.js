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
import { SiguienteButtonNObject } from "../../components/UI/uiButtons";
import { useNavigation } from '@react-navigation/native';
import { useEffect } from "react";

const Paginfo = ( {objeto} ) => { 
    const { comunidades, eventos, comunidad, evento, 
        setComunidad, setEvento, observaciones, setObservaciones, 
        emisor, setEmisor, setEntrada, entrada, carrito, setCarrito } = useInfoDestinoEvento();

    const navigation = useNavigation();

    useEffect (() => {
        setCarrito(objeto.carrito2Entradas);
        setEntrada(objeto.entrada);
    }, [objeto]);

    return ( 
    
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
                    text={observaciones} 
                    setText={setObservaciones}
                    placeholder={'Observaciones'}
                    title={'observaciones'}
                />

                <Spacer/>

                <Textbox
                    text={emisor} 
                    setText={setEmisor}
                    placeholder={'Emisor'}
                    title={'Emisor'}
                />


            </VStack>
            </ScrollView> 
            <View style={ buttonStyles.containerNavegacion }>
                <VolverButtonN navigation={navigation} path={"CarritoEntrada"} />
                <SiguienteButtonNObject navigation={navigation} path={"ResumenEntrada"} object={{carrito, entrada}} />
            </View>
    

        
        </View>

)}

export default Paginfo;