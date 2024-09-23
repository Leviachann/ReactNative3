import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../components/Card/style';
import MainBar from '../components/Card/MainBar';
import Message from '../components/Card/Message';
const Card = () => {
  return (
    <View >
        <MainBar title='Messages'></MainBar>
        <Message message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis. " isSender={false} />
      <Message message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " isSender={true} />
      <Message message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " isSender={true} />
      <Message message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla quam eu faci lisis mollis. " isSender={false} />
      <View style={{ }}></View>
      <View style={styles.inputContainer}>
      <TextInput
        style={styles.sendInput}
        placeholder="Message here.."
      />
      <TouchableOpacity style={styles.sendButton}>
        <Text style={styles.sendButtonText}>Send</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

export default Card;
