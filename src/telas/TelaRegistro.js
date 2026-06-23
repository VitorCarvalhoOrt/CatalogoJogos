import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useList } from '../context/ListContext';

export default function TelaRegistro() {
  const [erro, setErro] = useState();
  const [item, setItem] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [preco, setPreco] = useState("");
  const { addItem } = useList();
  const [categoria, setCategoria] = useState("");

  const [erroNome, setErroNome] = useState()
  const [erroQuantidade, setErroQuantidade] = useState()
  const [erroPreco, setErroPreco] = useState()
  const [erroCategoria, setErroCategoria] = useState()

  function adicionarItem() {
    let hasError = false;

    if (!item || item.trim() === "") {
      setErroNome("Nome não deve ser em branco");
      hasError = true;
    } else {
      setErroNome(undefined);
    }

    if (!quantidade || quantidade.toString().trim() === "") {
      setErroQuantidade("Quantidade não deve ser em branco");
      hasError = true;
    } else if (isNaN(Number(quantidade)) || Number(quantidade) < 0) {
      setErroQuantidade("Quantidade deve ser no mínimo zero");
      hasError = true;
    } else {
      setErroQuantidade(undefined);
    }

    if (!preco || preco.toString().trim() === "") {
      setErroPreco("Preço não deve ser em branco");
      hasError = true;
    } else if (isNaN(Number(preco)) || Number(preco) < 0) {
      setErroPreco("Preço deve ser no mínimo zero, e somente número");
      hasError = true;
    } else {
      setErroPreco(undefined);
    }

    if (!categoria || categoria.trim() === "") {
      setErroCategoria("Categoria não deve ser em branco");
      hasError = true;
    } else {
      setErroCategoria(undefined);
    }

    if (hasError) return;

    const novoItem = {
      id: String(Date.now()),
      nome: item,
      quantidade: quantidade,
      preco: preco,
      categoria: categoria
    };

    addItem(novoItem);

    setItem("");
    setQuantidade("");
    setPreco("");
    setCategoria("");

    alert('Item gravado com sucesso');
  }

  return (
    <View style={styles.container} >
      <TextInput
        placeholder="Jogo"
        onChangeText={setItem}
        value={item}
        style={styles.input}
      />

      {erroNome && <Text style={{ color: 'red' }}>{erroNome}</Text>}

      <TextInput
        placeholder="Categoria"
        onChangeText={setCategoria}
        value={categoria}
        style={styles.input}
      />

      {erroCategoria && <Text style={{ color: 'red' }}>{erroCategoria}</Text>}

      <TextInput
        placeholder="Preço"
        onChangeText={setPreco}
        value={preco}
        style={styles.input}
        
        keyboardType="numeric"
      />

      {erroPreco && <Text style={{ color: 'red' }}>{erroPreco}</Text>}

      <TextInput
        placeholder="Quantidade"
        onChangeText={setQuantidade}
        value={quantidade}
        style={styles.input}
        keyboardType="numeric"
        inputMode="numeric"
      />

      {erroQuantidade && <Text style={{ color: 'red' }}>{erroQuantidade}</Text>}

      <Button title="Gravar" onPress={adicionarItem} />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10
  },
  item: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  texto: {
    fontSize: 16,
    marginRight: 10,
  },
  input: {
    borderWidth: 2,
    padding: 8,
    marginBottom: 10,
    borderRadius: 10
  },
});