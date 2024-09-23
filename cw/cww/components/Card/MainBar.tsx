import React from 'react';
import { View,Text, Image, FlatList, TextInput } from 'react-native';
import { styles } from './style';



const MainBar= ({ title }: any)=>{
    return(
      <View style={styles.contCont}>      
      <View 
        style={styles.containerSearch}
      >
        <Text style={styles.back}>Back</Text>
        <Text style={styles.feed}>{title}</Text>
        <Text style={styles.back}>Filter</Text>
      </View>
      </View>
    );
  };
export default MainBar;