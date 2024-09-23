import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

const Search = ({ text = 'Search', borderRadius = 50, hidden = false }) => {
  const [isPasswordHidden, setIsPasswordHidden] = useState(hidden);

  const togglePasswordVisibility = () => {
    setIsPasswordHidden(!isPasswordHidden);
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput 
        style={[styles.search, { borderRadius }]}  
        placeholder={text} 
        placeholderTextColor="#BDBDBD" 
        secureTextEntry={isPasswordHidden} 
      />
      {hidden && (
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.showButton}>
          <Text style={styles.showButtonText}>{isPasswordHidden ? 'Show' : 'Hide'}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Search;
