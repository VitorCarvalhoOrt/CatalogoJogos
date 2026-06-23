import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import { useList } from '../context/ListContext';

export default function TelaLista({ navigation }) {
  const { lista, removeItem } = useList();

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Tela Lista</Text>

      <Button
        title="Ir para Registro"
        onPress={() =>
          navigation.navigate('Registro')
        }
      />

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <View style={{ flex: 1 }}>
              <Text style={styles.texto}>
                {item.quantidade} {item.nome}s, com cada custando {item.preco} e de categoria {item.categoria}
              </Text>
            </View>
            <Button title="Apagar" color={'red'} onPress={() => removeItem(item.id)} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  texto: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    justifyContent: 'space-between',
  },
});