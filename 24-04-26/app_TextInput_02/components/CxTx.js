// components/CxTx.js

import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default function CxTx({ dados }) {
  return (
    <TextInput
      style={[
        styles.input,
        dados.multiline && { height: dados.altura }
      ]}
      placeholder={dados.placeholder}
      maxLength={dados.maxLength}
      autoCapitalize={dados.autoCapitalize}
      keyboardType={dados.keyboardType}
      editable={dados.editable}
      multiline={dados.multiline}
      secureTextEntry={dados.secureTextEntry}
      textAlignVertical="top"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#777',
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 45,
    fontSize: 18
  }
});