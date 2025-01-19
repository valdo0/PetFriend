// src/components/Card.tsx
import React, { useRef } from 'react';
import { View, Text, Image, Animated, PanResponder, StyleSheet } from 'react-native';
import animals from '../data/animals';

type CardProps = {
  currentIndex: number;
  onSwipeLeft: () => void;
  onSwipeRight: () => void;
};

const Card: React.FC<CardProps> = ({ currentIndex, onSwipeLeft, onSwipeRight }) => {
  const pan = useRef(new Animated.ValueXY()).current;
  const cardOpacity = pan.x.interpolate({
    inputRange: [-200, 0, 200],
    outputRange: [0, 1, 0],
  });

  const handlePanResponderMove = (_, gestureState: any) => {
    pan.setValue({ x: gestureState.dx, y: gestureState.dy });
  };

  const handlePanResponderRelease = (_, gestureState: any) => {
    if (gestureState.dx > 120) {
      // Swipe Right (Accept)
      Animated.spring(pan, {
        toValue: { x: 500, y: gestureState.dy },
        useNativeDriver: true,
      }).start(onSwipeRight);
    } else if (gestureState.dx < -120) {
      // Swipe Left (Reject)
      Animated.spring(pan, {
        toValue: { x: -500, y: gestureState.dy },
        useNativeDriver: true,
      }).start(onSwipeLeft);
    } else {
      // Reset position if not swiped enough
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: true,
      }).start();
    }
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: handlePanResponderMove,
      onPanResponderRelease: handlePanResponderRelease,
    })
  ).current;

  return (
    <View style={styles.swiperContainer}>
      {currentIndex < animals.length && (
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            styles.card,
            {
              transform: pan.getTranslateTransform(),
              opacity: cardOpacity,
            },
          ]}
        >
          <Image source={{ uri: animals[currentIndex].image }} style={styles.cardImage} />
          <Text style={styles.cardText}>{animals[currentIndex].name}</Text>
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  swiperContainer: {
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
  },
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  cardText: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Card;
