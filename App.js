import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaLista from '../telas/TelaLista'; //ta dando erro
import TelaRegistro from '../telas/TelaRegistro';

const Tab = createBottomTabNavigator();

export default function NavegacaoAbas() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Início" component={TelaLista} />
      <Tab.Screen name="Configurações" component={TelaRegistro}/>
    </Tab.Navigator>
  );
}