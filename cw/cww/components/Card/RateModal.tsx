import React, { useState } from 'react';
import { Modal, Text, View, Button, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {styles} from './style';
const RateModal = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.Mcontainer}>
      <TouchableOpacity onPress={() => setModalVisible(true)}><Text>Open Modal</Text></TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.starContainer}>
              <Entypo name="star" size={40} color="orange" />
              <Entypo name="star" size={40} color="orange" />
              <Entypo name="star" size={40} color="orange" />
              <Entypo name="star" size={40} color="orange" />
              <Entypo name="star" size={40} color="orange" />
            </View>

            <Text style={styles.Mtitle}>Rate our app</Text>
            <Text style={styles.mText}>
            Consequat velit qui adipisicing sunt do reprehenderit ad laborum tempor ullamco exercitation. Ullamco tempor adipisicing et voluptate duis sit esse aliqua esse ex dolore esse. Consequat velit qui adipisicing sunt.
            </Text>

            <TouchableOpacity style={styles.loveButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.MbuttonText}>I love it!</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.linkText}>Don't like the app? Let us know.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default RateModal;
