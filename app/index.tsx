import { StyleSheet, View, Text } from 'react-native';
import Box from '../components/Box';

export default function App() {
    return (
        <View style={styles.container}>
            <Box style={{ backgroundColor: 'olive' , flexShrink: 1}}>Box 1 shring</Box>
            <Box style={{ backgroundColor: 'brown' , flexShrink: 1}}>Box 2 shrink</Box>
            {/* <Box style={{ backgroundColor: 'darkslategray' }}>Box 3</Box>
            <Box style={{ backgroundColor: 'yellow' }}>Box 4</Box>
            <Box style={{ backgroundColor: 'purple' }}>Box 5</Box>
            {/* <Box style={{ backgroundColor: 'orange' }}>Box 6</Box> */}
            {/* <Box style={{ backgroundColor: 'pink' }}>Box 7</Box> */}
            {/* <Box style={{ backgroundColor: 'gray' }}>Box 8</Box>
            <Box style={{ backgroundColor: 'brown' }}>Box 9</Box>
            <Box style={{ backgroundColor: 'black' }}>Box 10</Box> */} 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
       flex: 1,
       flexDirection: 'row',
       alignItems: 'flex-start',
       marginTop: 64,
       width: 300,
        borderWidth: 6,
        borderColor: 'red',
    },
})