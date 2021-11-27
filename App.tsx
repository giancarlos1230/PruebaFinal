import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { StyleSheet } from 'react-native';
import HomeNica from './src/screen/HomeNica';
import List from './src/screen/List';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
<NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeNica} />
        <Stack.Screen name="Lista" component={List} />
        </Stack.Navigator>
    </NavigationContainer>
 );
}

const styles = StyleSheet.create({
 
});