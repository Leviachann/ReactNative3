import React from 'react';
import { View, ScrollView } from 'react-native';
import Search from '../../components/Card/Search';
import BigPost from '../../components/Card/BigPost';
import MainBar from '../../components/Card/MainBar';

const Card = () => {
  return (
    <ScrollView>
      <View>
      <MainBar title='Content'></MainBar>
      <Search></Search>
      <BigPost></BigPost>
      <BigPost></BigPost>
      <BigPost></BigPost>
    </View >
    </ScrollView>
  );
};


export default Card;
