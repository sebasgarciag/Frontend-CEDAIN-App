import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { HStack, Stack} from "@react-native-material/core";
import { RadioButton, List } from "react-native-paper";
import styles from "../../assets/styles";
import CalendarPicker from "react-native-calendar-picker";

function FiltrosEntradasAlm({onPress, usuarios, setUsuarioSeleccionado, usuarioSeleccionado, fechaInicial, setFechaInicial, fechaFinal, setFechaFinal, setAlmacenSeleccionado, almacenSeleccionado, almacenes }) {


        return(
            <Stack style={styles.modalContainer}>
            <Text style={styles.headerText}>Filtros</Text>
            <List.Section  style={{width: '80%'}}>
				<List.Accordion
					title="Almacenista"
					onPress={onPress}>
					

					<RadioButton.Group onValueChange={usuario => setUsuarioSeleccionado(usuario)} value={usuarioSeleccionado}>
						<HStack>
							<Text style={{textAlignVertical: 'center'}}>Todos</Text>
							<RadioButton value={{}}/>
						</HStack>
						{usuarios.map((usuario) => (
							<HStack key={usuario.id_usuario}>
								<Text style={{textAlignVertical: 'center'}}>{usuario.nombre + " " + usuario.apellido_paterno}</Text>
								<RadioButton value={usuario}/>
							</HStack>
						))}
					</RadioButton.Group>
				</List.Accordion>

				<List.Accordion
					title="Almacen"
					onPress={onPress}>
					

					<RadioButton.Group onValueChange={almacen => setAlmacenSeleccionado(almacen)} value={almacenSeleccionado}>
						<HStack>
							<Text style={{textAlignVertical: 'center'}}>Todos</Text>
							<RadioButton value={{}}/>
						</HStack>
						{almacenes.map((almacen) => (
							<HStack key={almacen.id_almacen}>
								<Text style={{textAlignVertical: 'center'}}>{almacen.ciudad + " " + almacen.nombre}</Text>
								<RadioButton value={almacen}/>
							</HStack>
						))}
					</RadioButton.Group>
				</List.Accordion>

			  
				<List.Accordion
					title="Fecha Inicial"
					onPress={onPress}>
						{/* <Button title="Limpiar" onPress={() => setFechaInicial(new Date("2023-01-01"))} /> */}
						<TouchableOpacity style={styles.filterButton} onPress={() => setFechaInicial(new Date("2023-01-01"))}>
							<Text style={{textAlign: "center"}}>Limpiar</Text>
						</TouchableOpacity>
						<CalendarPicker 
							onDateChange={(date) => setFechaInicial(date)}
							width={300}
							previousTitle="Anterior"
							nextTitle="Siguiente"
							months={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Nobiembre', 'Diciembre']}
							weekdays={['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom']}
						/>
						<Text>Fecha: {fechaInicial.toString().slice(0, 16)}</Text>
					
				</List.Accordion>

				<List.Accordion
					title="Fecha Final"
					onPress={onPress}>
						<TouchableOpacity style={styles.filterButton} onPress={() => setFechaFinal(new Date())}>
							<Text style={{textAlign: "center"}}>Limpiar</Text>
						</TouchableOpacity>
						
						<CalendarPicker 
							onDateChange={(date) => setFechaFinal(date)}
							width={300}
							previousTitle="Anterior"
							nextTitle="Siguiente"
							months={['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Setiembre', 'Octubre', 'Nobiembre', 'Diciembre']}
							weekdays={['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom']}
						/>
						<Text>Fecha: {fechaFinal.toString().slice(0, 16)}</Text>
					
				</List.Accordion>

            </List.Section>
          </Stack>
        );
};

export default FiltrosEntradasAlm;