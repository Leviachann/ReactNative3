
import * as SplashScreen from 'expo-splash-screen';
import 'react-native';
import { Stack } from 'expo-router';
import { View } from 'react-native';
import Profile from './(tabs)/Profile';

SplashScreen.preventAutoHideAsync();

const RootLayout=()=> {
  return (
    
    <Stack screenOptions={{
      headerShown:false,
  }
  }>
      <Stack.Screen name='(tabs)'></Stack.Screen>
    </Stack>
  );
}
export default RootLayout
