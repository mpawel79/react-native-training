import {View, Text, Image, ImageBackground,ScrollView} from "react-native";
const logo = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "plum", padding: 60}}>
        <ScrollView>
        <Image source={logo} style={{width: 300, height: 300}}/>
        <Image source={{uri: 'https://picsum.photos/200'}} style={{width: 300, height: 300}}/>
  

        <ImageBackground source={logo} style={{ flex:1, width: 300, height: 300}}>
        <Text style={{color: "white"}}>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.

    
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.

    
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.

    
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.

    
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.

        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.

        </Text>
        </ImageBackground>

        <Image source={logo} style={{width: 300, height: 300}}/>
        <Image source={{uri: 'https://picsum.photos/200'}} style={{width: 300, height: 300}}/>
        </ScrollView>
    </View> 
  );
}