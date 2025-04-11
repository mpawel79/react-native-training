import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
        <View style={[styles.box, styles.lightblueBg]}>
            <Text>Lightblue box</Text>
        </View>
        <View style={[styles.box, styles.lightgreenBb]}>
            <Text>Lightgreen box</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
  },
  box: {
    width: 100,
    height: 100,
    padding: 20,
  },
  lightblueBg: {
    backgroundColor: 'lightblue',
  },
  lightgreenBb: {
    backgroundColor: 'lightgreen',
  }
});
