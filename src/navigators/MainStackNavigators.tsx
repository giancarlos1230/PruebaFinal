import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNica from '../screen/HomeNica';
import List from '../screen/List';
import Liquidacion from '../screen/Liquidacion';

const Stack = createNativeStackNavigator();


const MainStackNavigators = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeNica} />
          <Stack.Screen name="Lista" component={List} />
          <Stack.Screen name="Liquidacion" component={Liquidacion} />
          </Stack.Navigator>
      </NavigationContainer>
    )
}

export default MainStackNavigators