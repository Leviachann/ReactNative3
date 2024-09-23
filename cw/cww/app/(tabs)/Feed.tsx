import React from 'react';
import { View, ScrollView, } from 'react-native';
import Search from '../../components/Card/Search';
import BigPost from '../../components/Card/BigPost';
import MainBar from '../../components/Card/MainBar';
import VerticalPost from '../../components/Card/Verticalpost';
const Card = () => {
  return (
    <ScrollView>
      <View> 
      <MainBar title='Feed'></MainBar>
      <Search></Search>
      <VerticalPost></VerticalPost>
      <VerticalPost></VerticalPost>
      <VerticalPost></VerticalPost>
      <VerticalPost></VerticalPost>
      <BigPost></BigPost>
    </View >
    </ScrollView>
    
  );
};

export default Card;
