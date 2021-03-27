import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import styles from './styles';

const HomeScreen = props => {
  return (
    <View>
      {/* Search Bar Component */}

      {/* {Image Background} */}
      <ImageBackground
        source={require('../../../assets/images/airbnd.jpg')}
        style={styles.image}>
        {/* Title */}
        <Text style={styles.title}>Go Near</Text>

        {/* Button */}
        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore btn pressed')}>
          <Text> Explores nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};
export default HomeScreen;
