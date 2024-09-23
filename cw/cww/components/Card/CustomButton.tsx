import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styles } from './style';

type CustomButtonProps = {
  buttonText?: string;
  onPress?: () => void;
  secondaryText?: string;
  onSecondaryPress?: () => void;
};

const CustomButton: React.FC<CustomButtonProps> = ({
  buttonText = "Sign Up",
  onPress,
  secondaryText = "Forgot your password?",
  onSecondaryPress,
}) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.greenButton} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
      {secondaryText && onSecondaryPress && (
        <TouchableOpacity onPress={onSecondaryPress}>
          <Text style={styles.secondaryText}>{secondaryText}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomButton;
