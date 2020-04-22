import * as React from 'react';
import { TouchableOpacity, View ,Button,Text,StyleSheet} from 'react-native';
import { Container,Header,Content, Body, Icon,Left,Right,Item,Input} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import {Box,UtilityThemeProvider} from 'react-native-design-utility'
export default class Orders extends React.Component {
  static navigationOptions =({navigation})=>({
    drawerLabel: 'Booking History',
    drawerIcon: () => (
    <Icon name="md-refresh" size={25} color="black"/>
  ),
});
    render(){
      return (

        <Box f={1} center>
          <Text style={{fontSize:20}}>Orders Page</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Go back home"
        />
        </Box>
      );
    }
  }
  const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      backgroundColor: '#fff',
      alignItems:'center'
    },
    button:{
      marginTop:20,
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }
  });