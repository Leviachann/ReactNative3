import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from '../../components/Card/style';
import VerticalPost from '../../components/Card/Verticalpost';
import BigPost from '../../components/Card/BigPost';
import { Image } from 'expo-image';
import ToggleSwitch from '@/components/Card/ToggleSwitch';
import RateModal from '@/components/Card/RateModal';

interface ProfileProps {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

const Card: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('Posts');

  return (
    <ScrollView>
      <Profile selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
    </ScrollView>
  );
};

const Profile: React.FC<ProfileProps> = ({ selectedOption, setSelectedOption }) => {
  return (
    <View>
      <View style={styles.profCont}>
        <View style={styles.containerSearch}>
          <Text style={styles.backMarket}>Settings</Text>
          <Text style={styles.feedMarket}>Profile</Text>
          <Text style={styles.backMarket}>Logout</Text>
        </View>
      </View>
      <View style={styles.pfpCont}>
        <Image
          source={{ uri: 'https://m.media-amazon.com/images/I/51TL61eZtTL._AC_UF1000,1000_QL80_.jpg' }}
          placeholder={require('../../assets/images/play.png')}
          contentFit="cover"
          transition={1000}
          style={styles.pfp}
        />
      </View>
      <Text style={{ fontSize: 30, fontWeight: '600', textAlign: 'center' }}>Ango Sakaguchi</Text>
      <Text style={{ fontSize: 16, fontWeight: '700', textAlign: 'center' }}>A mantra goes here</Text>
      
      <ToggleSwitch selectedOption={selectedOption} setSelectedOption={setSelectedOption} />
      {selectedOption === 'Posts' ? (
        <>
          <VerticalPost />
          <VerticalPost />
          <VerticalPost />
          <VerticalPost />
        </>
      ) : (
        <>
          <BigPost />
          <BigPost />
          <BigPost />
        </>
      )}
      <RateModal></RateModal>
    </View>
  );
};

export default Card;
