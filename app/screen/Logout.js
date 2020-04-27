import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import firebase from '../Config'
export default class Logout extends Component {
  
  userSignout() {
    firebase.auth().signOut()
      .catch(error => {
        Alert.alert(error.message);
      })  
  }

  render() {
    return (
      <View style={styles.container}>
          <Button title="Logout" onPress={this.userSignout}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});