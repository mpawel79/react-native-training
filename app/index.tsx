import { StyleSheet, View } from 'react-native';
import Box from '../components/Box';

export default function App() {
    return (
        <View style={styles.container}>
            <Box style={{ backgroundColor: 'red' }}>dupa</Box>
            <Box style={{ backgroundColor: 'blue' }}>Box 2</Box>
            <Box style={{ backgroundColor: 'green' }}>Box 3</Box>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        borderWidth: 10,
        borderColor: 'black',
        padding: 10,
    },
})