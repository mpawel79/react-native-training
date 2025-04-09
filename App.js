import {View, TouchableOpacity, Text, Image, Pressable} from "react-native";

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
      <Pressable onPress={()=> console.log("Button pressed")} 
                 onLongPress={()=> console.log("Button long pressed")}
      style={{backgroundColor: "white", padding: 10, borderRadius: 5, alignItems: "center"}}>
      <Image source={require("./assets/adaptive-icon.png")} style={{width: 100, height: 100}} />
      </Pressable>
    </View>
  );
}