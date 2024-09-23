import { FontAwesome, FontAwesome5, FontAwesome6, Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import 'react-native';

const TabsLayout= ()=> {
  return (
    <Tabs screenOptions={{
        headerShown:false,
    }
    }>
        <Tabs.Screen name='Profile' options={{title:'Profile', tabBarIcon: () => <Ionicons name="person" size={24} color="black" />}}></Tabs.Screen>
        <Tabs.Screen name='Feed' options={{title:'Feed', tabBarIcon: () => <FontAwesome name="feed" size={24} color="black" />}}></Tabs.Screen>
        <Tabs.Screen name='Content' options={{title:'Content', tabBarIcon: () =><FontAwesome name="list-alt" size={24} color="black" />}}></Tabs.Screen>
        <Tabs.Screen name='MainMarket' options={{title:'Store', tabBarIcon: () => <FontAwesome5 name="store" size={24} color="black" />}}></Tabs.Screen>
        <Tabs.Screen name='Market' options={{title:'Market', tabBarIcon: () => <FontAwesome6 name="window-restore" size={24} color="black" />}}></Tabs.Screen>
    </Tabs>
  );
}
export default TabsLayout;