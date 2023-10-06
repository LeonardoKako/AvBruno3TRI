import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AgendamentoScreen from './src/screens/AgendamentoScreen';

import ConsultaScreen from './src/screens/ConsultaScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Agendamento" component={AgendamentoScreen} />
        <Tab.Screen name="Consulta" component={ConsultaScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

// const handleAgendar = () => {
//     console.log('Nome:', nome);
//     console.log('CPF:', cpf);
//     console.log('Data de Nascimento:', dataNascimento);
//   }
