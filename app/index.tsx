import { StyleSheet, View } from 'react-native';
import Box from '../components/Box';

export default function App() {
    return (
     //}}></View>
        <View style={{ backgroundColor: "plum", flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Box style={{ backgroundColor: 'red',flex:2 }}>dupa</Box>
            <Box style={{ backgroundColor: 'blue' , flex:1}}>Box 2</Box>
            <Box style={{ backgroundColor: 'green' }}>Box 3</Box>
            <Box style={{ backgroundColor: 'yellow' }}>Box 4</Box>


        // </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 4,
        borderWidth: 6,
        borderColor: 'red',
 
    },
})