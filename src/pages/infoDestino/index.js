import { Spacer, VStack, HStack } from "@react-native-material/core";
import { React, useEffect } from 'react';
import Dropdowns from "../../components/UI/dropDownE";
import Textbox from "../../components/UI/textBox";
import { ScrollView } from "react-native-gesture-handler";
import useInfoDestinoEvento from "./hookInfoDestinoEvento";
import { View, Text } from "react-native";
import buttonStyles from "../../assets/buttons/styles";
import styles from "../../assets/styles";
import { VolverButtonObject, SiguienteButtonNObject } from "../../components/UI/uiButtons";
import { useNavigation } from '@react-navigation/native';

const Paginfo = ( {objeto} ) => { 
    const { comunidades, eventos,
        setComunidad, setEvento, observaciones, setObservaciones, 
        receptor, setReceptor, setSalida, carrito, setCarrito, salida, limpiar } = useInfoDestinoEvento();

    //console.log("objeto info Destino Salida: ", objeto)    

    useEffect (() => {
        if ( objeto.salida.id_evento == 0 ) {
            limpiar();
        };
        setSalida(objeto.salida);
        setCarrito(objeto.carrito2);

    }, [objeto]);

    const navigation = useNavigation();
    //console.log("Carrito info Destino: ", carrito)
    //console.log("Salida info Destino: ", salida)

    
    return ( 
    
        <View style={styles.container}>
    
        <ScrollView>
        
            <HStack style={styles.titulosContainer}>
                <Text  style={styles.headerText}>Informacion de Destino</Text>
            </HStack>
            <VStack spacing={20} style={{padding: 10}}> 



                <Dropdowns
                    setValueEvento={setEvento} 
                    dataDropDownEvento={eventos}
                    valueEvento={null}
                    Titulo={"Evento"}/>

                <Spacer/>
                
                
                <Textbox
                    text={observaciones} 
                    setText={setObservaciones}
                    placeholder={'Observaciones'}
                    title={'Observaciones'}
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
                    <VolverButtonObject navigation={navigation} path={"Carrito"} object={{ carrito, salida }}/>
                    <SiguienteButtonNObject navigation={navigation} path={"ResumenSalida"} object={{ carrito, salida }} />
            </View>
        
        </View>

)}

export default Paginfo;