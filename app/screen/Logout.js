import React, { Component } from 'react';
import {ConfirmDialog} from 'react-native-simple-dialogs';
import { Button, View, Text, StyleSheet } from 'react-native';
import firebase from '../Config'
import {connect} from 'react-redux'
import NavigationService from '../services/NavigationService'
class Logout extends Component {
  userSignout() {
    firebase.auth().signOut()
      .catch(error => {
        Alert.alert(error.message);
      })  
  }
  state={
    dialogVisible:true,
  }
  render() {
    return(
      <ConfirmDialog
      title="Confirm Dialog"
      message="Are you really want to logout?"
      visible={this.state.dialogVisible}
      onTouchOutside={() => {this.setState({dialogVisible:false});NavigationService.navigate('Home');}}
      positiveButton={{
          title: "YES",
          onPress: () => {this.userSignout()}
      }}
      negativeButton={{
          title: "NO",
          onPress: () =>{this.setState({dialogVisible:false});NavigationService.navigate('Home');}
      }}
    />
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

const mapDispatchToProps = (dispatch) => {
  return {
      userlogout: () => dispatch({ type: 'USER_LOGOUT', payload: null })
  }
}

export default connect(null, mapDispatchToProps)(Logout);