import React from 'react';
import { View, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

type ButtonComponentProps = {
  onAccept: () => void;
  onReject: () => void;
};

const ButtonComponent: React.FC<ButtonComponentProps> = ({ onAccept, onReject }) => (
  <View style={styles.buttonContainer}>
    <Pressable style={styles.button} onPress={onReject}>
      <Icon name="paw" size={40} color="red" />
    </Pressable>
    <Pressable style={styles.button} onPress={onAccept}>
      <Icon name="paw" size={40} color="green" />
    </Pressable>
  </View>
);

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    width: '100%',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default ButtonComponent;
