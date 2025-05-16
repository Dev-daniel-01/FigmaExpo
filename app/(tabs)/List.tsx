import { Text, View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { Item } from '@/components/item';
import data from '@/constants/data';
import { Footer } from '@/components/footer';
import { useRouter } from 'expo-router';

export default function TabThreeScreen() {
  return (<>
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Terceira Pagina</Text>
      </View>
      <FlatList 
        data={data} 
        renderItem={({item}) => (
          <Item name={item.nome} motor={item.motor} image={item.imagem}/>
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        style={styles.list}
      />
         <Footer></Footer>
    </SafeAreaView>

  </>
  

  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EEEC88'
  },
  header: {
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
    elevation: 8,
  },
  headerText: {
    color: 'white',
    fontSize: 20
  },
  list: {
    flex: 1,
    width: '100%',
  },
  listContent: {
    paddingBottom: 20 
  }
});