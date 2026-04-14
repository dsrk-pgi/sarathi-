import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { LanguageProvider } from './src/context/LanguageContext';
import { DataProvider } from './src/context/DataContext';
import AppNavigator from './src/navigation/AppNavigator';
import SplashScreen from './src/screens/SplashScreen';

export default function App() {
  console.log('App component rendering...');
  const [showSplash, setShowSplash] = useState(false);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  try {
    console.log('Rendering main app...');
    return (
      <LanguageProvider>
        <DataProvider>
          <NavigationContainer>
            <StatusBar style="light" />
            <AppNavigator />
          </NavigationContainer>
        </DataProvider>
      </LanguageProvider>
    );
  } catch (error) {
    console.error('App Error:', error);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
        <Text style={{ fontSize: 18, color: 'red', textAlign: 'center' }}>
          Error loading app: {error.message}
        </Text>
      </View>
    );
  }
}
