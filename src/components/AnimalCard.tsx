import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface AnimalCardProps {
  name: string;
  image: string;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ name, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }}  height={800} width={800}/>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    margin: 10,
    height: 800,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AnimalCard;

