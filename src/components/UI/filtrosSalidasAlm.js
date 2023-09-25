import React from "react";
import { Text } from "react-native";
import { HStack, Stack} from "@react-native-material/core";
import { RadioButton, List } from "react-native-paper";
import styles from "../../assets/styles";
import useListadoEntradasAdmin from "../../pages/listadoEntradasAdmin/useListadoEntradasAdmin";

function FiltrosSalidasAlm({onPress, setEveValue, eveValue}){

        return(
            <Stack style={styles.modalContainer}>
            <Text style={styles.headerText}>Filtros</Text>
            <List.Section  style={{width: '80%'}}>
              <List.Accordion
                title="Eventos"
                onPress={onPress}>
                <RadioButton.Group onValueChange={newValue => setEveValue(newValue)} value={eveValue}>
                    <HStack>
                        <Text>Escuela</Text>
                        <RadioButton value='Escuela'/>
                    </HStack>
                    <HStack>
                        <Text>Wareton</Text>
                        <RadioButton value='Wareton'/>
                    </HStack>
                </RadioButton.Group>
                
              </List.Accordion>
              <List.Accordion
                title="Fecha">
                
              </List.Accordion>
            </List.Section>
          </Stack>
        );
};

export default FiltrosSalidasAlm;