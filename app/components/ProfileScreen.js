import * as React from 'react';
import {View ,Text,StyleSheet} from 'react-native';
import {Icon,Left,Button,Header,Container,Content} from 'native-base'
import { Ionicons } from '@expo/vector-icons';
export default class ProfileScreen extends React.Component {
     static navigationOptions={
        drawerIcon: () => (
        <Ionicons name="md-person" size={25} color="black"/>
      ),
      };
    render() {
      return (
       <Container>
            <Header style={{backgroundColor:'#3a455c',height:70,borderBottomColor:'#757575',marginTop:0}}>
            <Left>
               <Icon name='menu' style={{color:'white'}}onPress={()=>this.props.navigation.toggleDrawer()}/>
            </Left>
         </Header>
            <Content contentContainerStyle={{flex:1,
              alignItems:'center',justifyContent:'center'}}>
            <Text>ProfileScreen</Text>
          </Content>
       </Container>
      );
    }
  }
  const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      backgroundColor:'#ff6347',
      alignItems:'center'
    },
    button:{
      marginTop:20,
      flex:1,
      justifyContent:'center',
      alignItems:'center',
    }
  });