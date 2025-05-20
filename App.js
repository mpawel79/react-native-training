import * as React from 'react';
import { Pressable, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          headerStyle: {
            backgroundColor: "blue"
          },
          headerTintColor: "white",
          headerTitle: "Home",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
            color: "white"
          },
          headerBackTitle: "Back",
          headerBackTitleVisible: false,
          headerRight: () => (
            <Pressable onPress={() => alert("You pressed me")}>
              <Text style={{color: "white", fontSize: 16}}>Press me</Text>
            </Pressable>
          ),
          contentStyle: {
            backgroundColor: "blue"
          },
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen 
        name="About" 
        component={AboutScreen} 
        initialParams={{name: "Guest"}} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen 
            name="MainStack" 
            component={StackNavigator} 
            options={{ headerShown: false }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}