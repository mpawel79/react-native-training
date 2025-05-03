import React from 'react';
import { Platform, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import PokemonCard from '../components/PokemonCard';


export default function App() {

  const charmanderData = {
    name: 'Charmander',
    type: 'Fire',
    hp: 39,
    image: require('../assets/charmander.png'),
    moves: Array.isArray(['Ember', 'Fire Punch', 'Scratch', 'Fire Fang']) ? ['Ember', 'Fire Punch', 'Scratch', 'Fire Fang'] : [],
    weaknesses: Array.isArray(['Water', 'Ground', 'Rock']) ? ['Water', 'Ground', 'Rock'] : [],
  }

  const pikachuData = {
    name: 'Pikachu',
    type: 'Electric',
    hp: 35,
    image: require('../assets/pikachu.png'),
    moves: ['Thunder Shock', 'Quick Attack', 'Electro Ball', 'Iron Tail'],
    weaknesses: ['Ground'],
  }

  const squirtleData = {
    name: 'Squirtle',
    type: 'Water',
    hp: 44,
    image: require('../assets/squirtle.png'),
    moves: ['Water Gun', 'Tackle', 'Bite', 'Water Pulse'],
    weaknesses: ['Electric', 'Grass'],
  }

  const bulbasaurData = {
    name: 'Bulbasaur',
    type: 'Grass',
    hp: 45,
    image: require('../assets/bulbasaur.png'),
    moves: ['Tackle', 'Vine Whip', 'Razor Leaf', 'Solar Beam'],
    weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      {/* <Text>Hello Worldq</Text> */}
      <PokemonCard {...charmanderData}/>
      <PokemonCard {...pikachuData}/>
      <PokemonCard {...squirtleData}/>
      <PokemonCard {...bulbasaurData}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: '#f5f5f5',
    paddingTop: Platform.OS === 'android' ?  25 : 0,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
}); 