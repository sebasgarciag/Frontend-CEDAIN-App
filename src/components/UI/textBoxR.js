import React from 'react';
import { View, TextInput, Text, StyleSheet } from 'react-native';

const TextboxR = () => {
  return (
    <View style={styles3.container}>
      <TextInput
        style={styles3.textInput}
        placeholder="Escribe algo aquí"
      />
    </View>
  );
};

const styles3 = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 15,
    marginTop: 45,
  },

  textInput: {
    height: 40,
    width: 200,
    borderColor: 'black',
    borderWidth: 5,
    paddingLeft: 10,
  },
});

export default TextboxR;
