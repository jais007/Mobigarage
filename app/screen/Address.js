//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {Button,Icon} from 'native-base';

// create a component
class Address extends Component {
    static navigationOptions={
        headerLeft:<Icon name="md-menu" style={{color:'white',marginLeft:10}} onPress={()=>navigation.toggleDrawer()}/>,
        drawerIcon: () => (
         <Icon name="md-home" size={25} style={{fontSize: 20,paddingTop:5}}/>
     ),
     };

   
    render() {
        return (
            <View style={styles.container}>
               <Button bordered style={{padding:20,margin:4,borderRadius:4}} >
                   <Text>Add </Text>
                </Button>
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
        backgroundColor: '#fff',
    },
});

//make this component available to the app
export default Address;
