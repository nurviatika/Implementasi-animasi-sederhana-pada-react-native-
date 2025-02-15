import React, { useRef } from 'react';
import {
  View,
  Button,
  StyleSheet,
  Animated,
  Easing,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  const positionY = useRef(new Animated.Value(0)).current;
  const positionX = useRef(new Animated.Value(0)).current;
  const { width, height } = Dimensions.get('window');

  const moveCircleDown = () => {
    Animated.timing(positionY, {
      toValue: height - 90,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const moveCircleUp = () => {
    Animated.timing(positionY, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const moveCircleLeft = () => {
    Animated.timing(positionX, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  const moveCircleRight = () => {
    Animated.timing(positionX, {
      toValue: width - 50,
      duration: 1000,
      useNativeDriver: true,
      easing: Easing.bounce,
    }).start();
  };

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          {
            transform: [{ translateY: positionY }, { translateX: positionX }],
          },
        ]}
      />
      <View style={{ alignSelf: 'center', marginBottom: 10, width: '30%' }}>
        <TouchableOpacity style={styles.button} onPress={moveCircleUp}>
          <Text style={styles.buttonText}>Up</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity style={styles.button} onPress={moveCircleLeft}>
          <Text style={styles.buttonText}>Left</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={moveCircleDown}>
          <Text style={styles.buttonText}>Down</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={moveCircleRight}>
          <Text style={styles.buttonText}>Right</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#dae6eb', 
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#366575', 
    position: 'absolute',
    top: 0,
  },
  button: {
    backgroundColor: '#366575', 
    padding: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#d8e8ed', 
    textAlign: 'center',
    fontSize: 16,
  },
});

export default App;