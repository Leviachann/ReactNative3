import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

interface ToggleSwitchProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ selectedOption, setSelectedOption }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedOption === 'Posts' ? styles.activeOption : styles.inactiveOption,
          ]}
          onPress={() => setSelectedOption('Posts')}
        >
          <Text
            style={[
              styles.optionText,
              selectedOption === 'Posts' ? styles.activeText : styles.inactiveText,
            ]}
          >
            Posts
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.optionButton,
            selectedOption === 'Photos' ? styles.activeOption : styles.inactiveOption,
          ]}
          onPress={() => setSelectedOption('Photos')}
        >
          <Text
            style={[
              styles.optionText,
              selectedOption === 'Photos' ? styles.activeText : styles.inactiveText,
            ]}
          >
            Photos
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToggleSwitch;
