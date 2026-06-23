import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function TelaLista({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela Inicial</Text>

      <Button
        title="Ir para Registro"
        onPress={() =>
          navigation.navigate('Registro', {
            itemId: 1,
            nome: 'Juca',
          })
        }
      />
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