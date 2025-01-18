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
            <Text style={styles.cardText}>{card.name}</Text>
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    bottom: 10,
    left: 15,
    right: 15,
    padding: 10,
    color: 'black',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    borderRadius: 10,
    textAlign: 'left',
  },
});
export default HomeScreen;

