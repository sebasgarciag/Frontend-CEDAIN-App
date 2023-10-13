import { Spacer, VStack, HStack } from "@react-native-material/core";
import { React } from 'react';
import Dropdowns from "../../components/UI/dropDownE";
import Textbox from "../../components/UI/textBox";
import { ScrollView } from "react-native-gesture-handler";
import useInfoDestinoEvento from "./hookInfoDestinoEvento";
import { View, Text } from "react-native";
import buttonStyles from "../../assets/buttons/styles";
import styles from "../../assets/styles";
import { VolverButtonNDirect } from "../../components/UI/uiButtons";
import { SiguienteButtonNObject } from "../../components/UI/uiButtons";
import { useNavigation } from '@react-navigation/native';
import { useEffect } from "react";

const Paginfo = ( {objeto} ) => { 
    const { comunidades, eventos,
        setComunidad, setEvento, observaciones, setObservaciones, 
        receptor, setReceptor, setSalida, carrito, setCarrito, salida } = useInfoDestinoEvento();

    useEffect (() => {
        setSalida(objeto.salida);
        setCarrito(objeto.carrito2);
    }, [objeto]);

    const navigation = useNavigation();
    
    return ( 
    
        <View style={styles.container}>
    
        <ScrollView>
        
            <HStack style={styles.titulosContainer}>
                <Text  style={styles.headerText}>Informacion de Destino</Text>
            </HStack>
            <VStack spacing={20} style={{padding: 10}}> 


                {/* <Dropdowns
                    setValueEvento={setComunidad}
                    dataDropDownEvento={comunidades}
                    valueEvento={null}
                    setEstado={setComunidad}
                    Titulo={"Comunidad"}/> */}

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
                    <VolverButtonNDirect navigation={navigation} />
                    <SiguienteButtonNObject navigation={navigation} path={"ResumenSalida"} object={{ carrito, salida }} />
            </View>
        
        </View>

)}

export default Paginfo;