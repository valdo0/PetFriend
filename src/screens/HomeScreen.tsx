// src/screens/HomeScreen.tsx
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Swiper from '../components/Swiper';

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Swiper />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default HomeScreen;
