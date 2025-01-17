import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

interface SwipeButtonsProps {
  onSwipe: (direction: 'left' | 'right') => void;
}

const SwipeButtons: React.FC<SwipeButtonsProps> = ({ onSwipe }) => {
  return (
    <View style={styles.container}>
      <Button title="❌ No" color="red" onPress={() => onSwipe('left')} />
      <Button title="❤️ Sí" color="green" onPress={() => onSwipe('right')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%',
  },
});

export default SwipeButtons;
