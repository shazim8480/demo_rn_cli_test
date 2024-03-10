import {StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const Profile = ({navigation}) => {
  return (
    <View>
      <Text>Profile screen OTG</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
