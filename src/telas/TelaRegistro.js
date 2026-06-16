import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TelaRegistro({ route }) {
  const { itemId, nome } = route.params || {}; // Garante que params não seja undefined

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela de Detalhes</Text>
      <Text>ID do Item: {itemId}</Text>
      <Text>Nome: {nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    fontSize: 20,
    marginBottom: 20,
  },
});