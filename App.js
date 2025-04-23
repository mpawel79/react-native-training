import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';


export default function App() {
  const [dimensions, setDimensions] = useState({
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  });

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setDimensions({
        width: window.width,
        height: window.height
      });
    });
    return () => subscription.remove();
  }, []);

  const windowWidth = dimensions.width;
  const windowHeight = dimensions.height;

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={{fontSize: windowWidth > 500 ? 50 : 18}}>Hello</Text>
      </View>
    </View>
  );
}

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 500 ? "70%" : "90%",
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // text: {
  //   fontSize: 24,
  //   fontWeight: 'bold',
  // },
});
