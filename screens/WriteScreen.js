import * as React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteScreen extends React.Component{
  render(){
    return (
      <View style = {{backgroundColor: 'gold',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'}}> 
      <Header
      backgroundColor={'red'}
      centerComponent={{
        text: 'Story Hub',
        style: { color: 'gold', fontSize: 20 },
      }}/>
        <Text>
          Write Your Story!
        </Text>
        <TextInput style = {styles.inputBox}
          placeholder="Story Title">
        </TextInput>
        <TextInput style = {styles.inputBox}
          placeholder="Author's Name">
        </TextInput>
        <TextInput style = {styles.inputBox2}
          placeholder="Story">
        </TextInput>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    inputBox: {
        width: 200,
        height:30,
        borderWidth: 1.5,
        fontSize: 12
    },
    inputBox2: {
        width: 200,
        height:400,
        borderWidth: 1.5,
        fontSize: 12
    }
})