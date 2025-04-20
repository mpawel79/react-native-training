import { StyleSheet, View, Text } from 'react-native';
import Box from '../components/Box';

export default function App() {
    return (
        <View style={styles.container}>
            <Box style={{ backgroundColor: 'olive', alignSelf: 'flex-start' }}>Box 1</Box>
            <Box style={{ backgroundColor: 'brown',  alignSelf: 'flex-end'}}>Box 2</Box>
            <Box style={{ backgroundColor: 'darkslategray', alignSelf: 'center' }}>Box 3</Box>
            <Box style={{ backgroundColor: 'yellow' , alignSelf: 'stretch'}}>Box 4</Box>
            <Box style={{ backgroundColor: 'purple', alignSelf: 'auto' }}>Box 5</Box>
            <Box style={{ backgroundColor: 'orange', alignSelf:  "flex-end" }}>Box 6</Box>
            <Box style={{ backgroundColor: 'pink' }}>Box 7</Box>
            <Box style={{ backgroundColor: 'gray' }}>Box 8</Box>
            <Box style={{ backgroundColor: 'brown' }}>Box 9</Box>
            <Box style={{ backgroundColor: 'black' }}>Box 10</Box>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        borderWidth: 6,
        borderColor: 'red',
    },
})