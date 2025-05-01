// navigate.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen'; 
import Login from './screens/Login';
import BottomTabs from './screens/navBar';
import Feed from './screens/Feed';



const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

  <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
  <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
  <Stack.Screen name="Feed" component={BottomTabs} options={{ headerShown: false }} />
</Stack.Navigator>



    </NavigationContainer>
  );
}
