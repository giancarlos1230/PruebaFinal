import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeNica from '../screen/HomeNica';
import List from '../screen/List';
import NicaAtributos from '../screen/NicaAtributos';
import ListKey from '../screen/ListKey';
import Menu from '../screen/Menu';


const Stack = createNativeStackNavigator();


const MainStackNavigators = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Home" component={HomeNica} />
        <Stack.Screen name="Listkey" component={ListKey} />
          <Stack.Screen name="Lista" component={List}

          options={{
            title: 'Lista de Tareas',
            headerStyle: {
              backgroundColor: 'skyblue',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />

        <Stack.Screen name="Atributo" component={NicaAtributos} 

            options={{
              title: 'Lista de Atributos',
              headerStyle: {
                backgroundColor: '#7283CF',
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
            }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainStackNavigators