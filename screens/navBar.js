// BottomTabs.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from './Feed';
import Profile from './Profile';
import History from './History';
import Wallet from './Wallet';
import More from './More';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#007EEF',
        tabBarIcon: ({ color, size }) => {
          let iconName;
          switch (route.name) {
            case 'Inicio':
              iconName = 'home';
              break;
            case 'Historial':
              iconName = 'history';
              break;
            case 'Billetera':
              iconName = 'credit-card';
              break;
            case 'Más':
              iconName = 'ellipsis-h';
              break;
            case 'Perfil':
              iconName = 'user';
              break;
          }
          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={Feed} />
      <Tab.Screen name="Historial" component={History} />
      <Tab.Screen name="Billetera" component={Wallet} />
      <Tab.Screen name="Más" component={More} />
      <Tab.Screen name="Perfil" component={Profile} />
    </Tab.Navigator>
  );
}
