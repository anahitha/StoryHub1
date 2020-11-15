import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ReadScreen extends React.Component{
    render(){
  return (
    <View>
      <Text style = {{fontSize: 20, fontStyle: 'Georgia'}}>
        Read Stories
      </Text>
    </View>
  );
}
}