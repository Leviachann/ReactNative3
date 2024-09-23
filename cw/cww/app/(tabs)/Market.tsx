import React from 'react';
import { View, Text, Image, ScrollView} from 'react-native';
import { styles } from '../../components/Card/style';
import ProductList from '../../components/Card/ProductList';
import SectionTitle from '../../components/Card/SectionTitle';



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
      <View style={styles.marketCont}>
        <View style={styles.containerSearch}>
          <Text style={styles.backMarket}>Back</Text>
          <Text style={styles.feedMarket}>Market</Text>
          <Text style={styles.back}>Filter</Text>
        </View>
        <Image source={require('../../assets/images/play.png')} style={styles.img} />
      </View>
      
      <SectionTitle title='Hot Deals'></SectionTitle>
      <ProductList></ProductList>
      <SectionTitle title='Trending'></SectionTitle>
      <ProductList></ProductList>
    </View>
  );
};



export default Card;
