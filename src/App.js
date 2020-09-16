import 'react-native-gesture-handler';
import React from 'react';
import {Image, StatusBar} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import logo from './assets/instagram.png';
import Feed from './pages/Feed';

const Stack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <Stack.Navigator
        screenOptions={{
          headerTitle: <Image source={logo} />,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#f5f5f5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Feed" component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

/**
{},
{
  headerLayoutPresent: 'center',
  headerNavigationOptions: {
    headerStyle: {
      backgroundColor: '#f5f5f5',
    },
  },
},
 */
