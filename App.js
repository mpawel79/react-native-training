import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, useWindowDimensions , SafeAreaView} from 'react-native';


export default function App() {

  const dimensions = useWindowDimensions();
  const windowWidth = dimensions.width;
  const windowHeight = dimensions.height;

  // const [dimensions, setDimensions] = useState({
  //   width: Dimensions.get('window').width,
  //   height: Dimensions.get('window').height
  // });

  // useEffect(() => {
  //   const subscription = Dimensions.addEventListener('change', ({ window }) => {
  //     setDimensions({
  //       width: window.width,
  //       height: window.height
  //     });
  //   });
  //   return () => subscription.remove();
  // }, []);

  // const windowWidth = dimensions.width;
  // const windowHeight = dimensions.height;

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.box}>
        <Text style={[ styles.text, {fontSize: windowWidth > 500 ? 150 : 18}]}>Welcome</Text>
      </View>
    </SafeAreaView>
  );
}

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  container: {
    flex: 1,
    backgroundColor: 'plum',

  },
  box: {
    // width: windowWidth > 500 ? "70%" : "90%",
    // height: windowHeight > 500 ? "70%" : "90%",
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
