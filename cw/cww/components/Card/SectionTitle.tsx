import React from 'react';
import { View,Text, Image, FlatList, TextInput } from 'react-native';
import { styles } from './style';

const SectionTitle= ({ title }: any)=>{
    return(
        <Text style={styles.sectionTitle}>{title}</Text>
    )
}
export default SectionTitle;