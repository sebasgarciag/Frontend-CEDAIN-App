import React from "react";
import { Text, ScrollView, Image, Pressable } from "react-native";
import { Spacer, HStack, VStack } from "@react-native-material/core";
import { Surface } from "react-native-paper";

function ListadoSalidas(){
        return(
            <ScrollView style={{ borderColor: "lightgray"}} flex={1} padding={5}>
                <VStack spacing={10}>
                    <Text style={{fontSize: 30}}>Salida 1</Text>
                    <Text style={{fontSize: 30}}>Salida 2</Text>
                    <Text style={{fontSize: 30}}>Salida 3</Text>
                    <Text style={{fontSize: 30}}>Salida 4</Text>
                    <Text style={{fontSize: 30}}>Salida 5</Text>
                    <Text style={{fontSize: 30}}>Salida 6</Text>
                    <Text style={{fontSize: 30}}>Salida 7</Text>
                    <Text style={{fontSize: 30}}>Salida 8</Text>
                    <Text style={{fontSize: 30}}>Salida 9 </Text>
                    <Text style={{fontSize: 30}}>Salida 10</Text>
                    <Text style={{fontSize: 30}}>Salida 11</Text>
                    <Text style={{fontSize: 30}}>Salida 12</Text>
                </VStack>
            </ScrollView>
        );
};

export default ListadoSalidas;