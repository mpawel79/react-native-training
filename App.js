import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
        <View style={[styles.box, styles.lightblueBg, styles.boxShadow]}>
            <Text style={{borderRadius: 10, borderWidth: 2, borderColor: 'green', borderStyle: 'dashed', padding: 10, fontSize: 20, fontWeight: 'bold', color: 'white'}}>Lightblue box</Text>
        </View>
        <View style={[styles.box, styles.lightgreenBb, styles.androidShadow]}>
            <Text>Lightgreen box</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  box: {
    width: "50%",
    height: "25%",
    padding: 20,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: 'dashed',
  },
  lightblueBg: {
    backgroundColor: 'lightblue',
  },
  lightgreenBb: {
    backgroundColor: 'lightgreen',
  },
  boxShadow: {
    shadowColor: 'blue',
    shadowOffset: {width: 10, height: 12},
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  shadowOpacity: {
    shadowOpacity: 0.5,
  },
  shadowRadius: {
    shadowRadius: 10,
  },
  androidShadow: {
    elevation: 10,
    shadowColor: 'blue',
  },
  
});
