import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { router } from 'expo-router';

export const Footer = () => (


  
  <View style={styles.footer}>
    <TouchableOpacity onPress={() => router.push('/(tabs)/explore')}>
      <Text style={styles.text}>API</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => router.replace('/')}>
      <Image source={require('@/assets/images/logoFotter.png')} style={styles.logo} />
    </TouchableOpacity>

    <TouchableOpacity onPress={() => router.push('/(tabs)/list')}>
      <Text style={styles.text}>JSON</Text>
    </TouchableOpacity> 
  </View>
);

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    display: 'flex',
    bottom: 0,
    width: '100%',
    height: 50,
    backgroundColor: '#3C436A',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center'
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
});
