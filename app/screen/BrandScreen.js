//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Box} from 'react-native-design-utility'
class BrandScreen extends Component {
    static navigationOptions =({navigation})=>({
        title:navigation.getParam('name'),
    });
    render() {
        return (
          <Box f={1}>
              <Text>BrandScreen</Text>
          </Box>
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
export default BrandScreen;
