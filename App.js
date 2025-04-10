import {View, TouchableOpacity, Text, Image, Modal, Button} from "react-native";
import { useState } from "react";

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex : 1, backgroundColor: "plum", padding: 60}}>
      <TouchableOpacity 
        style={{
          backgroundColor: 'white',
          padding: 10,
          borderRadius: 5,
          alignItems: 'center'
        }}
        onPress={() => {console.log("Button pressed"); setIsModalVisible(true)}}
      >
        <Text style={{ color: 'black' }}>Click me</Text>
      </TouchableOpacity>
      <Modal visible={isModalVisible} animationType="slide" 
            onRequestClose={() => {console.log("Modal closed"); setIsModalVisible(false)}}
            presentationStyle="pageSheet"
            >
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "white" , padding: 30}}>
            <Text>Hello</Text>
            <Button title="Close" onPress={() => {console.log("Button pressed closing"); setIsModalVisible(false)}} />
        </View>


      </Modal>
    </View>
  );
}