import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MenuButtonItem = ({ text, currentScreen, onPress }) => {
  
  const styles = StyleSheet.create({

    buttonContainer: {
        backgroundColor: currentScreen == text ? '#8F8B36' : "#F5E1B9",
        padding: 12,
        borderRadius: 10,
        marginTop: 15,
    },

    textButton: {
        color: currentScreen == text ? '#FFFF' : "#80673B",
        marginLeft: 10,
        fontWeight: 'bold',
        fontWeight: currentScreen == text ? 'bold' : "normal",
        fontSize: 15,
        
    },
})

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MenuButtonItem;
