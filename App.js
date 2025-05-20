import * as React from 'react';
import { Pressable, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} 
            options={{
                headerStyle: {
                    backgroundColor: "red"
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
                headerStyle: {
                    backgroundColor: "blue"
                },
                headerTintColor: "white"
                 
            }}
            />
            <Stack.Screen name="About" component={AboutScreen} initialParams={{name: "Guest"}}/>
        </Stack.Navigator>
      {/* Rest of your app code */}
    </NavigationContainer>
  );
}