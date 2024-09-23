import React from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import { styles } from './style';

const mockProducts = [
  {
    userId: 1,
    id: 1,
    title: "Item #1 Name Goes Here",
    price: "$19.99",
  },
  {
    userId: 1,
    id: 2,
    title: "Item #2 Name Goes Here",
    price: "$19.99",
  },
  {
    userId: 1,
    id: 3,
    title: "Item #3 Name Goes Here",
    price: "$19.99",
  },
  {
    userId: 1,
    id: 4,
    title: "Item #4 Name Goes Here",
    price: "$19.99",
  },
];

const Product = ({ product }: any) => {
  return (
    <View style={styles.collection}>
      <Image
        style={styles.blockImage} 
        source={{ uri: 'https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1' }} 
      />
      <Text>{product.title}</Text>
      <Text style={styles.itemPrice}>{product.price}</Text>
    </View>
  );
};

const ProductList = () => {
  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id.toString()}
        data={mockProducts}
        renderItem={({ item }) => <Product product={item} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 16 }}
      />
    </View>
  );
};

export default ProductList;
