# Catálogo de Jogos

Aplicativo para gerenciar um catálogo de jogos, permitindo registrar, visualizar e gerenciar uma coleção de jogos com quantidade, preço e categoria.

## Funcionamento

A página inicial serve para direcionar o usuário à página de registro, que, por sua vez, permite o usuário registrar um jogo, com nome, quantidade, preço e categoria. Os jogos registrados podem ser exibidos na página de lista, que os lista, permitindo a exclusão de cada

## Partes

- **Tela Inicial**: Página incial
- **Tela de Registro**: Formulário para adicionar novos jogos com validação de dados
- **Tela de Lista**: Visualiza todos os jogos registrados com opção de remover itens

## O que é `useEffect` e qual seu papel no ciclo de vida de um componente?
O `useEffect` é um "hook" que permite que você sincronize um componente com um sistema externo, permitindo que você atualize, por exemplo, um campo de texto com cada mudança que uma variável recebe.

## Como funciona o array de dependências e o que acontece se o deixarmos vazio []?
O array de dependências controla quando o useEffect executa, quando ele é atualizado.
Se deixado com uma array vazia, ele somente executa uma vez, após ser renderizado
Se deixado **completamente** vazio, ele execuda toda vez que o componente renderiza
