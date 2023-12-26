import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import MainScreen from './screen/MainScreen';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import LogoutScreen from './screen/LogoutScreen1';
import HomeScreen from './screen/HomeScreen';
import CreateTaskScreen from './screen/CreateTaskScreen';
import TodayTaskScreen from './screen/TodayTaskScreen';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigation = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="home" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="CreateTask"
      component={CreateTaskScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="add-circle-outline" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Menu"
      component={LogoutScreen}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="menu-outline" size={size} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName=" " screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={TabNavigation} /> 
        <Stack.Screen name="CreateTask" component={CreateTaskScreen} />
        <Stack.Screen name="TodayTask" component={TodayTaskScreen} />
        <Stack.Screen name="Menu" component={LogoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
