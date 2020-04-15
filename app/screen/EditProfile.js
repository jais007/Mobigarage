//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button} from 'react-native';
import { Header,Container,Content} from 'native-base';

// create a component
class EditProfile extends React.Component {
    render() {
        return (
          <Container>
              <Content contentContainerStyle={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Text>EditProfile</Text>
              <Button
            onPress={() => this.props.navigation.goBack()}
            title="Save"
            />
              </Content>
          </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default EditProfile;
