import React, { useEffect, useRef } from 'react';
import { Animated, Modal, Text, TouchableOpacity, View } from 'react-native';
import { PanGestureHandler, State, PanGestureHandlerStateChangeEvent } from 'react-native-gesture-handler';
import { styles } from './style';

interface DrawerProps {
  visible: boolean;
  onClose: () => void;
}

const Drawer: React.FC<DrawerProps> = ({ visible, onClose }) => {
  const slideAnim = useRef(new Animated.Value(300)).current;
  const drawerHeight = 300; 

  const handleGesture = Animated.event(
    [{ nativeEvent: { translationY: slideAnim } }],
    { useNativeDriver: true }
  );

  const handleStateChange = (event: PanGestureHandlerStateChangeEvent) => {
    const { nativeEvent } = event;

    if (nativeEvent.state === State.END) {
      if (nativeEvent.translationY > 100) {
        onClose(); 
      } else {
        Animated.spring(slideAnim, {
          toValue: 0, 
          useNativeDriver: true,
        }).start();
      }
    }
  };

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : drawerHeight, 
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible, slideAnim]);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="none"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <PanGestureHandler
          onGestureEvent={handleGesture}
          onHandlerStateChange={handleStateChange}
        >
          <Animated.View style={[styles.drawer, { transform: [{ translateY: slideAnim }] }]}>
            <View style={styles.handle} />
            <View style={styles.drawerContent}>
              <Text style={styles.drawerTitle}>Drawer Header</Text>
              <Text style={styles.drawerSubtitle}>
                Consequat velit qui adipiscing sunt do reprehenderit ad laborum tempor ullamco exercitation.
              </Text>
              <TouchableOpacity style={styles.primaryButton} onPress={onClose}>
                <Text style={styles.primaryButtonText}>Click Me</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.secondaryButton} onPress={onClose}>
                <Text style={styles.secondaryButtonText}>Secondary Action</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </PanGestureHandler>
      </View>
    </Modal>
  );
};

export default Drawer;
