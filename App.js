import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import AppStack from './AppStack';

const Tab = createBottomTabNavigator();

const commonOptions = {
  headerShown: true,
  tabBarActiveTintColor: 'red',
  tabBarLabelStyle: { fontSize: 12, fontWeight: 'bold' },
  tabBarLabelPosition: 'beside-icon',
  tabBarStyle: { backgroundColor: 'blue' }
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={commonOptions}>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: () => <Ionicons name="home" color="red" size={24} />,
            tabBarLabel: 'Home'
          }} 
        />
        <Tab.Screen 
          name="Settings" 
          component={SettingsScreen} 
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name="settings" color={color} size={size} />,
            tabBarBadge: 3,
            tabBarBadgeStyle: { backgroundColor: 'red', color: 'white' }
          }} 
        />
        <Tab.Screen 
          name="About Stack" 
          component={AppStack} 
          options={{
            tabBarIcon: () => <Ionicons name="information-circle" color="red" size={24} />,
            tabBarLabel: 'About'
          }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}