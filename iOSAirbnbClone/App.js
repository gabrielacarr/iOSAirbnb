/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import Entype from 'react-native-vector-icons/Entypo';
import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';
import feed from './assets/data/feed';
import SearchResultScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import GuestScreen from './src/screens/Guests';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen />
        {/* <Post post={post2} /> */}
        {/* <SearchResultScreen /> */}
        {/* <DestinationSearchScreen /> */}
        {/* <GuestScreen /> */}
      </SafeAreaView>
    </>
  );
};

export default App;
