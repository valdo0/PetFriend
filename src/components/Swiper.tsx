// src/components/Swiper.tsx
import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import animals  from '../data/animals';
import Card from './Card';
import ButtonComponent from './ButtonComponent';

const Swiper: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleAccept = () => {
    if (currentIndex < animals.length) {
      Alert.alert(`${animals[currentIndex].name} ha sido aceptado`);
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, animals.length - 1));
    }
  };

  const handleReject = () => {
    if (currentIndex < animals.length) {
      Alert.alert(`${animals[currentIndex].name} ha sido rechazado`);
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, animals.length - 1));
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Card currentIndex={currentIndex} onSwipeLeft={handleReject} onSwipeRight={handleAccept} />
      <ButtonComponent onAccept={handleAccept} onReject={handleReject} />
    </View>
  );
};

export default Swiper;
