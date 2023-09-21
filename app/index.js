import { View, Text, Pressable } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Button, Stack } from "@react-native-material/core";

const Home = () => { 
    return ( 
    <SafeAreaProvider> 
        <Stack fill center spacing={20}>

            {/* PARA QUE LOS REDIRIJA A SU PAGINA CAMBIEN EL "/" POR EL NOMBRE DEL ARCHIVO DE SU PAGINA PRINCIPAL */}
            
            <Button
                title="chernobyl"
                onPress={() => router.replace("/")}
            />
            <Button
                title="eq2"
                onPress={() => router.replace("/")}
            />
            <Button
                title="adise"
                onPress={() => router.replace("/")}
            />
            <Button
                title="ced"
                onPress={() => router.replace("/resumenSalida")}
            />
        </Stack> 
    </SafeAreaProvider>
    )
}

const GenericButton = ({ text, onPress, style, labelStyle, disabled }) => {
  return (
    <Button
      style={style}
      labelStyle={labelStyle}
      mode="contained"
      onPress={onPress}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};
const buttonStyles = {
  volverB: {
    justifyContent: "center",
    alignItems: "center",
    padding: "auto",
    backgroundColor: "gray",
  },
  view_only_button: {
    color: "#CCCCCC",
  },
  editable_button: {
    color: "white",
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
  view_only: {
    // fontSize: 36,
    // color: "#00FFA6",
    color: "gray",
  },
  editable: {
    // fontSize: 100,
    color: "black",
  },
  dropdown: {
    margin: 16,
    marginTop: 0,
    height: 50,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  viewOnlySelectedTextStyle: {
    fontSize: 16,
    color: "gray",
  },
  editableSelectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  link: {
    fontSize: 18,
    textDecorationLine: "underline",
    color: "blue",
  },
});
