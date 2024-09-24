import { Stack } from 'expo-router';
import 'react-native';


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
