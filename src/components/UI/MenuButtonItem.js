import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MenuButtonItem = ({ text, currentScreen, onPress }) => {
  const [backgroundColor, setBackgroundColor] = useState('#FBB03B');
  const [textColor, setTextColor] = useState('#fff');

  useEffect(() => {
    // Verifica si la pantalla actual coincide con el texto del botón
    if (currentScreen === text) {
      setBackgroundColor('#fff');
      setTextColor('#FBB03B');
    } else {
      setBackgroundColor('#FBB03B');
      setTextColor('#fff');
    }
  }, [currentScreen, text]);

  const styles = StyleSheet.create({
    buttonContainer: {
      backgroundColor,
      padding: 12,
      borderRadius: 35,
      marginTop: 15,
    },
    textButton: {
      color: textColor,
      marginLeft: 10,
      fontWeight: 'bold',
      fontSize: 15,
    },
  });

  return (
    <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

export default MenuButtonItem;
