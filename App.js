//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,Image} from 'react-native';
import {createDrawerNavigator ,DrawerItems} from 'react-navigation'
import HomeScreen from './app/components/HomeScreen';
import ProfileScreen from './app/components/ProfileScreen';
import Orders from './app/components/Orders';
import { Container,Header,Content, Body, Icon } from 'native-base';

export default class App extends Component {
  render() {
    return (
      <MyApp/>
    );
  }
}

const CustomDrawerContentComponent=(props)=>(
  <Container>
      <Header style={{height:130,backgroundColor:'#3a455c',marginTop:0}}>
         <Body>
            <Image name='person' style={styles.dImage}
             source={require('./app/img/profile-image.jpg')}/>
         </Body>
      </Header>
      <Content>
        <DrawerItems {...props}/>
      </Content>
  </Container>
)

const MyApp=createDrawerNavigator ({
  Home:HomeScreen,
  Profile:ProfileScreen,
  Orders:Orders,
},{
    initialRouteName:'Home',
    contentComponent:CustomDrawerContentComponent,
    //  drawerOpenRoute:'DrawerOpen',
    //  drawerOpenRoute:'DrawerClose',
    //  drawerOpenRoute:'Drawertoggle',
})
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
  dImage:{
    height:100,
    width:100,
    borderRadius:50, 
  }
});

//make this component available to the app

