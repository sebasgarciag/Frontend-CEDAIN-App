import React from "react";
import { Text, ScrollView, Image, Pressable } from "react-native";
import { Spacer, HStack, VStack } from "@react-native-material/core";
import { Surface } from "react-native-paper";

function ListadoEntradas(){
        return(
            <ScrollView style={{ borderColor: "lightgray"}} flex={1} padding={5}>
                <VStack spacing={10}>
                    <Text style={{fontSize: 30}}>Entrada 1</Text>
                    <Text style={{fontSize: 30}}>Entrada 2</Text>
                    <Text style={{fontSize: 30}}>Entrada 3</Text>
                    <Text style={{fontSize: 30}}>Entrada 4</Text>
                    <Text style={{fontSize: 30}}>Entrada 5</Text>
                    <Text style={{fontSize: 30}}>Entrada 6</Text>
                    <Text style={{fontSize: 30}}>Entrada 7</Text>
                    <Text style={{fontSize: 30}}>Entrada 8</Text>
                    <Text style={{fontSize: 30}}>Entrada 9</Text>
                    <Text style={{fontSize: 30}}>Entrada 10</Text>
                    <Text style={{fontSize: 30}}>Entrada 11</Text>
                    <Text style={{fontSize: 30}}>Entrada 12</Text>
                </VStack>
            </ScrollView>
        );
};

export default ListadoEntradas;