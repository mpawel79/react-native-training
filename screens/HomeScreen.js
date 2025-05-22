import React from "react";
import { View, Text, Button, StyleSheet} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function HomeScreen({ navigation, route }) {
//   const navigation = useNavigation();
//   const route = useRoute();
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Text style={styles.text}>{route.params?.result}</Text>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About", {name: "Vishwklas"})}
      />
      <Text style={styles.text}>Result: {route.params?.result}</Text>
      <Button title="Go to About1" onPress={() => navigation.navigate("About", {name: "Vishwasjjj2"})}/>
    <Button title="Toggle Drawer" onPress={() => navigation.toggleDrawer()}/>
    <Button title="Open Drawer" onPress={() => navigation.openDrawer()}/>
    <Button title="Close Drawer" onPress={() => navigation.closeDrawer()}/>
    <Button title="Go to Dashboard" onPress={() => navigation.navigate("Dashboard")}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
});