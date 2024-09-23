import React from 'react';
import { View, ScrollView,} from 'react-native';
import SectionTitle from '../../components/Card/SectionTitle';
import ProductList from '../../components/Card/ProductList';
import MainBar from '../../components/Card/MainBar';
import Search from '../../components/Card/Search';

const Card = () => {
  return (
    <ScrollView>
      <Market />
    </ScrollView>
  );
};

const Market = () => {
  return (
    <View>
      <MainBar title='Market'></MainBar>
      <Search></Search>
      <SectionTitle title='Hot Deals'></SectionTitle>
      <ProductList></ProductList>
      <SectionTitle title='Trending'></SectionTitle>
      <ProductList></ProductList>
      <SectionTitle title='Deals'></SectionTitle>
      <ProductList></ProductList>
    </View>
    
  );
};
export default Card;
