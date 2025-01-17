// screens/HomeScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-deck-swiper';
import animals from '../data/animals';
const HomeScreen: React.FC = () => {
  const [cards] = useState(
animals
  );

  return (
    <View style={styles.container}>
      <Swiper
        cards={cards}
        renderCard={(card) => (
          <View style={styles.card}>
            <Image source={{ uri: card.image }} style={styles.cardImage} />
            <Text>{card.name}</Text>
          </View>
        )}
        onSwiped={(index) => console.log('Swiped card index:', index)}
        onSwipedAll={() => console.log('No mas cartas')}
        cardIndex={0}
        backgroundColor={'white'}
        stackSize={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  card: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 5,
  },
  cardImage: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default HomeScreen;

