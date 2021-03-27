import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

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
    </View>
  );
};

export default DestinationSearchScreen;
