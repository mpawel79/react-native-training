import React from "react";
import { View, Text, StyleSheet, StatusBar ,SafeAreaView,
  TextInput,Button, Image, KeyboardAvoidingView} from "react-native";
import { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <KeyboardAvoidingView behavior="padding" 
    style={styles.container}
    keyboardVerticalOffset={Platform.OS === "ios" ? 50 : -200}
    >
      <View style={styles.form}>
      <Image source={require('./assets/adaptive-icon.png')} style={styles.image} />
      <Text style={styles.text}>User Login</Text>
      <TextInput style={styles.input} placeholder="Enter your name" value={name} onChangeText={setName}   />
      <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Enter your password" 
      secureTextEntry={true} value={password} 
      onChangeText={setPassword} />
      <Button title="Login" onPress={() => {}} style={styles.button} />
      </View>
    </KeyboardAvoidingView>
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
  form: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 15,
  },
  input: {
    height: 40,
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  button: {
    backgroundColor: "#000",
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  image: {
    alignSelf: "center",
    marginBottom: 20,
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default App;
