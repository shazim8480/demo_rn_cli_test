/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Button} from 'react-native';
import AppNavigator from './src/services/navigation/app-navigator';

function App({navigation}) {
  return (
    <SafeAreaView>
      <AppNavigator>
        <View>
          <Button
            onPress={() => navigation.navigate()}
            title="Go to Home Page"
            color="blue"
          />
        </View>
      </AppNavigator>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
