import React from 'react';
import { View, Text,} from 'react-native';
import { styles } from './style';
const Message = ({ message='Hi!', isSender=false }) => {
  return (
    <View style={[styles.messageContainer, isSender ? styles.sender : styles.receiver]}>
      <Text style={isSender ? styles.senderText : styles.receiverText}>
        {message}
      </Text>
    </View>
  );
};
export default Message;