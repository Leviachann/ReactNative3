import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from './style';

const VerticalPost = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: 'https://i0.wp.com/sunrisedaycamp.org/wp-content/uploads/2020/10/placeholder.png?ssl=1' }} 
          style={styles.verticalImage} 
        />
      </View>
      <View>
        <View style={styles.topContainer}>
          <Text style={styles.title}>Header</Text>
          <Text style={styles.time}>8m ago</Text>
        </View>
        <Text style={styles.content}>
          He'll want to use your yacht, and I don't want this thing smelling like fish.
        </Text>
      </View>
    </View>
  );
};

export default VerticalPost;
