import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import pokemonList from "./data.json";
export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      {/* <ScrollView style={styles.scrollView}>
      {pokemonList.map((pokemon) => (
        <View key={pokemon.id} style={styles.card}>
          <Text style={styles.cardText}>{pokemon.type}</Text>
          <Text style={styles.cardText}>{pokemon.name}</Text>
        </View>
      ))}

      <Text style={styles.text}>Hello World</Text>
      </ScrollView> */}
      <FlatList 
        data={pokemonList}
        renderItem={({ item }) => {
          console.log(item.id)
          return (
          <View key={item.id} style={styles.card}>
            <Text style={styles.cardText}>{item.id}</Text>
            <Text style={styles.cardText}>{item.type}</Text>
            <Text style={styles.cardText}>{item.name}</Text>
          </View>
          )
        }}
        keyExtractor={(item, index) => item.id.toString()}
        ListHeaderComponent={() => <Text style={{ paddingTop: 100, textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>Header</Text>}
        ItemSeparatorComponent={() => <View style={{ height: 5}} />}
        ListEmptyComponent={() => <Text style={{ paddingTop: 100, textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>No data</Text>}
        horizontal={false}
        ListFooterComponent={() => <Text style={{ paddingBottom: 100, textAlign: 'center', fontSize: 20, fontWeight: 'bold' }}>End of list</Text>}
      />  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    // marginBottom: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  cardText: {
    fontSize: 30 ,
    fontWeight: 'bold',
  },
}); 