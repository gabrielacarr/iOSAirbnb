import React, {useState} from 'react';
import {View, TextInput, Text, FlatList} from 'react-native';
import styles from './styles';
import searchResults from '../../../assets/data/search';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState('');

  return (
    <View style={styles.container}>
      {/* Input components */}
      <TextInput
        style={styles.textInput}
        placeholder="Where are you traveling?"
        value={inputText}
        onChange={setInputText}
      />

      {/* List of destinations */}
      <FlatList
        data={searchResults}
        renderItem={({item}) => <Text>{item.description}</Text>}
      />
    </View>
  );
};

export default DestinationSearchScreen;
