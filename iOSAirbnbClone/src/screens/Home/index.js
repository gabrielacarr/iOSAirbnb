import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';

const HomeScreen = props => {
  return (
    <View>
      {/* Search Bar Component */}

      <ImageBackground
        source={require('../../../assets/images/airbnd.jpg')}
        style={styles.image}>
        {/* Title */}
        <Text style={styles.title}>Go Near</Text>

        {/* Button */}
      </ImageBackground>
    </View>
  );
};
export default HomeScreen;
