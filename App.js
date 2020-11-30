import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Contatos from './pages/Contatos';
import TextToSpeech from './pages/TextToSpeech';
import Localizacao from './pages/Localizacao';
import ImagemCamera from './pages/ImagemCamera';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Contatos" component ={Contatos} />
        <Tab.Screen name="TextToSpeech" component ={TextToSpeech} />
        <Tab.Screen name="Localizacao" component ={Localizacao} />
        <Tab.Screen name="ImagemCamera" component ={ImagemCamera} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
