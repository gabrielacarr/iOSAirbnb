import React from 'react';
import {View, Text, ImageBackground, Pressable} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto';
import styles from './styles';

const HomeScreen = props => {
  return (
    <View>
      {/* Search Bar Component */}
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn('Search btn pressed')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchButtonText}>Where are you traveling?</Text>
      </Pressable>

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
