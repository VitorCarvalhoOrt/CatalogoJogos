import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TelaLista from '../telas/TelaLista'
import TelaRegistro from '../telas/TelaRegistro'
import TelaInicio from '../telas/TelaInicio'

const Tab = createBottomTabNavigator();

export default function NavegacaoAbas() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Lista" component={TelaLista}/>
            <Tab.Screen name="Registro" component={TelaRegistro}/>
            <Tab.Screen name="Inicio" component={TelaInicio}/>
        </Tab.Navigator>
    )
}
