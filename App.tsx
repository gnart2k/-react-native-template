import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { cn } from './utils/cn';
import { isIOS, isWeb } from './utils/platform';
export default function App() {
  return (
    <View className='flex items-center h-screen'>
      <Text className={cn(isWeb && 'text-green-300', isIOS && 'text-red-500')}>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

