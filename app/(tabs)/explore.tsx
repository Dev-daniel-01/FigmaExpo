import { Footer } from '@/components/footer';
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, SafeAreaView } from 'react-native';

type Character = {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
};

const TabTwoScreen = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await fetch('https://rickandmortyapi.com/api/character');
        const data = await res.json();
        setCharacters(data.results); 
      } catch (error) {
        console.error('Erro ao buscar personagens:', error);
      }
    };

    fetchCharacters(); 
  }, []);

  const renderItem = ({ item }: { item: Character }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.texto}>Description:</Text>
      <Text style={styles.texto}>{item.name}</Text>
      <Text style={styles.texto}>{item.species}</Text>
      <Text style={styles.texto}>{item.status}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.cabecalho}>
        <Text style={styles.Tcabecalho}>Consume Api do Rick and morty</Text>
      </View>
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
        style={styles.list}
      />
      <Footer></Footer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EEEC88',
  },
  list: {
    flex: 1,
    width: '100%',
    marginBottom: 30
  },
  listContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    alignItems: 'center',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    backgroundColor: '#3C436A',
    width: 300,
    height: 325,
    marginBottom: 10,
    borderRadius: 16,
  },
  image: {
    width: 150, 
    height: 150, 
    borderRadius: 8
  },
  texto: {
    color: 'white',
    fontSize: 20
  },
  cabecalho: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 25,
    height: 80,
    backgroundColor: '#3C436A',
    width: '100%',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  
    // Sombra para Android
    elevation: 8,

  },
  Tcabecalho: {
    color: 'white',
    fontSize: 20
  }
});

export default TabTwoScreen;