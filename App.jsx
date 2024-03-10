/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Button, Text} from 'react-native';
import AppNavigator from './src/services/navigation/app-navigator';

function App() {
  return (
    <AppNavigator>
      <SafeAreaView>
        <View style={styles.sectionContainer}>
          <Text>Welcome to React Native Demo App!</Text>
        </View>
      </SafeAreaView>
    </AppNavigator>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
