import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import FormatScreen from './screens/FormatScreen';
import ExportScreen from './screens/ExportScreen';

export type RootStackParamList = {
  Home: undefined;
  Format: {
    uri: string;
    mediaType: 'image' | 'video';
  };
  Export: {
    outputPath: string;
    fileSize: number;
    mediaType: 'image' | 'video';
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Format" component={FormatScreen} />
        <Stack.Screen name="Export" component={ExportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

