import React, { useState } from 'react';
import { FontAwesome, FontAwesome5, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler'; 
import Drawer from '@/components/Card/Drawer';

const TabsLayout = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const openDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tabs.Screen
          name="Profile"
          options={{
            title: '',
            tabBarIcon: () => <Ionicons name="person" size={24} color="black" />,
          }}
        />
        <Tabs.Screen
          name="Feed"
          options={{
            title: '',
            tabBarIcon: () => <FontAwesome name="feed" size={24} color="black" />,
          }}
        />
        <Tabs.Screen
          name="Content"
          options={{
            title: '',
            tabBarIcon: () => <FontAwesome name="list-alt" size={24} color="black" />,
          }}
        />
        <Tabs.Screen
          name="MainMarket"
          options={{
            title: '',
            tabBarIcon: () => <FontAwesome5 name="store" size={24} color="black" />,
          }}
        />
        <Tabs.Screen
          name="Market"
          listeners={{
            tabPress: (e) => {
              e.preventDefault(); 
              openDrawer(); 
            },
          }}
          options={{
            title: '',
            tabBarIcon: () => <FontAwesome6 name="window-restore" size={24} color="black" />,
          }}
        />
      </Tabs>

      <Drawer visible={drawerVisible} onClose={closeDrawer} />
    </GestureHandlerRootView>
  );
};

export default TabsLayout;
