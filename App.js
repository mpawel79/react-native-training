import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <Button title="Alert 1" onPress={() => Alert.alert("Button pressed")} />
     <Button title="Alert 2" onPress={() => Alert.alert("Button pressed", "This is an alert")} />
     <Button title="Alert 3" onPress={() => Alert.alert("Button pressed", "This is an alert", [
      {text: "Cancel", onPress: () => console.log("Cancel Pressed")},
      {text: "OK", onPress: () => console.log("OK Pressed")},
     ])} />
    </View>
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
