import {View, TouchableOpacity, Text} from "react-native";

export default function App() {
  return (
    <View style={{ flex : 1, backgroundColor: "plum", padding: 60}}>
      <TouchableOpacity 
        style={{
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 5,
          alignItems: 'center'
        }}
        onPress={() => console.log("Button pressed")}
      >
        <Text style={{ color: 'black' }}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
}