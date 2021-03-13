import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Main from './src/pages/Main';

export default function App() {
  return (
    <>
      <Main />
      <StatusBar style="auto" />
    </> 
  );
}