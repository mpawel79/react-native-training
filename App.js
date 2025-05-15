import React from "react";
import { View, Text, StyleSheet, StatusBar ,SafeAreaView,
  TextInput,Switch} from "react-native";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("inital value");
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello World </Text>
  
      <TextInput style={styles.multiline} 
      value={name} onChangeText={setName} 
      placeholder="Enter your name" 
      secureTextEntry={false}
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
      multiline={true}
      numberOfLines={4}
      />
      <Text style={styles.text}>{name}</Text>
      <Switch value={isEnabled} 
      onValueChange={setIsEnabled}
      trackColor={{
        true: "#000",
        false: "#000",
      }}
      thumbColor={isEnabled ? "#000" : "#fff"}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  multiline: {
    textAlignVertical: "top",
    minHeight: 100,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
});

export default App;
