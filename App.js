import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ 
        tabBarLabelPosition: "beside-icon", 
     
        tabBarActiveTintColor : 'blue'}}>
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{ headerShown: false, tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} />, tabBarActiveTintColor: 'red' ,
        tabBarIcon: ()=> <Ionicons name="home" color="red" size={24} />}} />
        <Tab.Screen  name="Settings" component={SettingsScreen} 
        options={{ tabBarBadge: 3, tabBarBadgeStyle: { backgroundColor: 'red', color: 'white' },  headerShown: false, tabBarIcon: ({ color, size }) => <Ionicons name="person" color={color} size={size} /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}