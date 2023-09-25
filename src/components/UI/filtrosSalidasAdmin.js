import React from "react";
import { Text} from "react-native";
import { HStack, Stack} from "@react-native-material/core";
import { RadioButton, List } from "react-native-paper";
import styles from "../../assets/styles";

function FiltrosSalidasAdmin({onPress,setAlmValue, setEveValue, almValue, eveValue}){

        return(
            <Stack style={styles.modalContainer}>
            <Text style={styles.headerText}>Filtros</Text>
            <List.Section  style={{width: '80%'}}>
              <List.Accordion
                title="Almacenista"
                onPress={onPress}>
                <RadioButton.Group onValueChange={newValue => setAlmValue(newValue)} value={almValue}>
                  <HStack>
                    <Text>tomas</Text>
                    <RadioButton value='tomas'/>
                  </HStack>
                  <HStack>
                    <Text>alexis</Text>
                    <RadioButton value='alexis'/>
                  </HStack>
                </RadioButton.Group>
              </List.Accordion>

              <List.Accordion
                title="Evento"
                onPress={onPress}>
                <RadioButton.Group onValueChange={newValue => setEveValue(newValue)} value={eveValue}>
                    <HStack>
                        <Text>Escuela</Text>
                        <RadioButton value='Chihuahua'/>
                    </HStack>
                    <HStack>
                        <Text>Wareton</Text>
                        <RadioButton value='Creel'/>
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

export default FiltrosSalidasAdmin;