import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaLista from './src/telas/TelaLista';
import TelaRegistro from './src/telas/TelaRegistro';
import TelaInicio from './src/telas/TelaInicio';
import { ListProvider } from './src/context/ListContext';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ListProvider>
        <Tab.Navigator>
          <Tab.Screen name="Inicio" component={TelaInicio} />
          <Tab.Screen name="Lista" component={TelaLista} />
          <Tab.Screen name="Registro" component={TelaRegistro} />
        </Tab.Navigator>
      </ListProvider>
    </NavigationContainer>
  );
}