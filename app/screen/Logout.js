//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Container,Header,Content, Body, Icon} from 'native-base';


class Logout extends Component {
    static navigationOptions={
        drawerIcon: () => (
          <Icon name="ios-log-out" size={25} style={{fontSize: 20,paddingTop:5}}/>
      ),
      };
    render() {
        return (
            <View style={styles.container}>
                <Button title="Logout" onPress={()=>this.props.navigation.navigate('Welcome')}/>
            </View>
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
export default Logout;
