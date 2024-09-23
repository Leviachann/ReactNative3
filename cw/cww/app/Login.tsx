import React from 'react';
import { Image, View, Text, ScrollView, TextInput } from 'react-native';
import { styles } from '../components/Card/style';
import Search from '../components/Card/Search';
import CustomButton from '../components/Card/CustomButton';
const Card = () => {
  return (
    <ScrollView>
      <View style={styles.contCont}>  
      <View style={styles.contCont}>    
        <Text style={styles.feed}>Login</Text>
      </View>
    </View >
      <View style={styles.contCont}>
      <Search text='Email' borderRadius={10}></Search>
      <Search text='Password' borderRadius={10} hidden={true}></Search>
      <CustomButton 
        buttonText="Login" 
        onPress={() => console.log('Sign Up pressed')}
        secondaryText="Forgot your password?"
        onSecondaryPress={() => console.log('Forgot Password pressed')}
      />
      </View>
    </ScrollView>
    
  );
};

export default Card;
