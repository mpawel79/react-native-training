import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Import screens
import HomeScreen from './screens/HomeScreen';
import DashboardScreen from './screens/DashboardScreen';
import SettingsScreen from './screens/SettingsScreen';
import AboutScreen from './screens/AboutScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ 
              title: 'Home2', 
              drawerLabel: 'Home2', 
              drawerActiveBackgroundColor: 'red',
              drawerIcon: ({ color, size }) => (
                <Image source={require('./assets/favicon.png')} style={{ width: size, height: size }} />
              )
            }} 
          />
          <Drawer.Screen 
            name="Dashboard" 
            component={DashboardScreen} 
            options={{ 
              title: 'Dashboard2', 
              drawerLabel: 'Dashboard2',
              drawerIcon: ({ color, size }) => (
                <Image source={require('./assets/favicon.png')} style={{ width: size, height: size }} />
              )
            }} 
          />
          <Drawer.Screen 
            name="Settings" 
            component={SettingsScreen} 
            options={{ 
              title: 'Settings2', 
              drawerLabel: 'Settings2',
              drawerIcon: ({ color, size }) => (
                <Image source={require('./assets/favicon.png')} style={{ width: size, height: size }} />
              )
            }} 
          />
          <Drawer.Screen 
            name="About" 
            component={AboutScreen} 
            options={{ 
              title: 'About2', 
              drawerLabel: 'About2',
              drawerIcon: ({ color, size }) => (
                <Image source={require('./assets/favicon.png')} style={{ width: size, height: size }} />
              )
            }} 
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
